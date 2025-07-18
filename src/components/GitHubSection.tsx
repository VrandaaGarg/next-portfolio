"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Calendar,
  Trophy,
  Zap,
  ExternalLink,
  ChevronsLeftRight,
  Loader2,
} from "lucide-react";
import { PiSmileySad } from "react-icons/pi";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays, format } from "date-fns";

const GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME || "vrandaagarg"; // Replace with your GitHub username
const GITHUB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Add your GitHub token to .env.local

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface GitHubData {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
}

export default function GitHubSection() {
  const [githubData, setGitHubData] = useState<GitHubData | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [contributionStats, setContributionStats] = useState({
    totalContributions: 0,
    longestStreak: 0,
    currentStreak: 0,
    averagePerDay: 0,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      setIsLoading(true);
      try {
        // Fetch user data
        const userResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const userData = await userResponse.json();
        setGitHubData(userData);

        // Fetch real GitHub contributions using GraphQL API
        const fetchRealContributions = async () => {
          try {
            if (!GITHUB_ACCESS_TOKEN) {
              console.warn(
                "GitHub access token not found. Using fallback data."
              );
              return generateFallbackContributions();
            }

            const query = `
              {
                user(login: "${GITHUB_USERNAME}") {
                  contributionsCollection {
                    contributionCalendar {
                      weeks {
                        contributionDays {
                          date
                          contributionCount
                        }
                      }
                    }
                  }
                }
              }
            `;

            const response = await fetch("https://api.github.com/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
              },
              body: JSON.stringify({ query }),
            });

            const data = await response.json();

            if (data.errors) {
              console.error("GraphQL errors:", data.errors);
              return generateFallbackContributions();
            }

            const rawContributions =
              data?.data?.user?.contributionsCollection?.contributionCalendar
                ?.weeks || [];

            // Convert nested weeks data into a flat array
            const formattedData: ContributionDay[] = rawContributions.flatMap(
              (week: { contributionDays: ContributionDay[] }) =>
                week.contributionDays
            );

            return formattedData;
          } catch (error) {
            console.error("Error fetching real contributions:", error);
            return generateFallbackContributions();
          }
        };

        // Fallback function when API fails or token is missing
        const generateFallbackContributions = () => {
          const contributionsArray: ContributionDay[] = [];
          const startDate = subDays(new Date(), 365);

          for (let i = 0; i < 365; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);

            // Generate realistic contribution pattern
            const dayOfWeek = date.getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

            let contributionCount = 0;
            const randomFactor = Math.random();

            if (!isWeekend && randomFactor > 0.3) {
              contributionCount = Math.floor(Math.random() * 15) + 1;
            } else if (isWeekend && randomFactor > 0.7) {
              contributionCount = Math.floor(Math.random() * 8) + 1;
            }

            contributionsArray.push({
              date: format(date, "yyyy-MM-dd"),
              contributionCount,
            });
          }

          return contributionsArray;
        };

        const realContributions = await fetchRealContributions();
        setContributions(realContributions);

        // Calculate stats from real contributions
        const total = realContributions.reduce(
          (sum: number, day: ContributionDay) => sum + day.contributionCount,
          0
        );
        const average = total / 365;

        // Calculate streaks
        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;

        for (let i = realContributions.length - 1; i >= 0; i--) {
          if (realContributions[i].contributionCount > 0) {
            tempStreak++;
            if (i === realContributions.length - 1 || currentStreak === 0) {
              currentStreak = tempStreak;
            }
          } else {
            longestStreak = Math.max(longestStreak, tempStreak);
            tempStreak = 0;
            if (currentStreak > 0) {
              currentStreak = 0;
            }
          }
        }
        longestStreak = Math.max(longestStreak, tempStreak);

        setContributionStats({
          totalContributions: total,
          longestStreak,
          currentStreak,
          averagePerDay: Math.round(average * 10) / 10,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (isLoading) {
    return (
      <section className="min-h-screen bg-[#0a0a0a]/40 relative overflow-hidden py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-20"
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-16 h-16 mx-auto mb-4"
            >
              <Github className="w-full h-full text-[#fa0f69]" />
            </motion.div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl text-neutral-300 ml-4"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading GitHub data...
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen  relative overflow-hidden  py-20 px-4">
      <div className="relative z-10 container mx-auto max-w-6xl md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-7 md:mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Coding <span className="text-gradient-primary">Stats</span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-4"
            >
              <ChevronsLeftRight className="inline-block md:h-12 md:w-12 h-8 w-8 text-[#fa0f69]" />
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            Explore my coding journey, contributions, and the projects that
            define my development path
          </motion.p>
        </motion.div>

        {githubData ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              staggerChildren: 0.1,
            }}
            className="space-y-6 md:space-y-12"
          >
            {/* Contribution Heatmap */}
            <motion.div
              whileHover={{ y: -2 }}
              className="glass-effect-with-border rounded-xl md:rounded-3xl p-4 md:p-8 group hover:border-[#fa0f69]/40 transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-xl md:text-3xl justify-center font-bold text-white mb-2 flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] p-2"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                  </motion.div>
                  Contribution Activity
                </h3>
                <p className="text-neutral-400">
                  {contributionStats.totalContributions} contributions in the
                  last year
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="contribution-heatmap overflow-x-auto"
              >
                <CalendarHeatmap
                  startDate={subDays(new Date(), 365)}
                  endDate={new Date()}
                  values={contributions.map((day) => ({
                    date: day.date,
                    count: day.contributionCount,
                  }))}
                  classForValue={(value: unknown) => {
                    const typedValue = value as { count: number } | null;
                    if (!typedValue || typedValue.count === 0)
                      return "color-empty";
                    if (typedValue.count < 3) return "color-scale-1";
                    if (typedValue.count < 6) return "color-scale-2";
                    if (typedValue.count < 10) return "color-scale-3";
                    return "color-scale-4";
                  }}
                  showWeekdayLabels={true}
                />
              </motion.div>

              {/* Legend */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between mt-4 text-sm text-neutral-400"
              >
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm bg-[#161b22] border border-[#21262d]"></div>
                  <div className="w-3 h-3 rounded-sm bg-[#fa0f69]/30"></div>
                  <div className="w-3 h-3 rounded-sm bg-[#fa0f69]/50"></div>
                  <div className="w-3 h-3 rounded-sm bg-[#fa0f69]/70"></div>
                  <div className="w-3 h-3 rounded-sm bg-[#fa0f69]"></div>
                </div>
                <span>More</span>
              </motion.div>
            </motion.div>

            {/* GitHub Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GitHub Stats Card */}
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group"
              >
                <div className="glass-effect-with-border rounded-xl md:rounded-3xl p-3 md:p-5 group-hover:border-[#fa0f69]/40 transition-all duration-300 relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-[#fa0f69]/5 to-[#ff1b6b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] p-2"
                      >
                        <Trophy className="w-4 h-4 text-white" />
                      </motion.div>
                      <h3 className="text-lg md:text-xl  font-bold text-white">
                        GitHub Stats
                      </h3>
                    </div>

                    <div className="aspect-auto">
                      <picture>
                        <source
                          srcSet={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&bg_color=00000000&text_color=ffffff&icon_color=fa0f69&title_color=ff1b6b&border_color=fa0f69&hide_border=true`}
                        />
                        <img
                          src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true`}
                          className="w-full h-auto rounded-2xl"
                          loading="lazy"
                          alt="GitHub Stats"
                          onError={(e) => {
                            console.error(
                              "GitHub Stats image failed to load:",
                              e
                            );
                            console.log(
                              "Attempted URL:",
                              `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true`
                            );
                          }}
                          onLoad={() =>
                            console.log(
                              "GitHub Stats image loaded successfully"
                            )
                          }
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Streak Stats Card */}
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group"
              >
                <div className="glass-effect-with-border rounded-xl md:rounded-3xl p-3 md:p-5 group-hover:border-[#fa0f69]/40 transition-all duration-300 relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-[#ff1b6b]/5 to-[#ff4081]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ff1b6b] to-[#ff4081] p-2"
                      >
                        <Zap className="w-4 h-4 text-white" />
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Streak Stats
                      </h3>
                    </div>

                    <div className="aspect-auto">
                      <picture>
                        <source
                          srcSet={`https://nirzak-streak-stats.vercel.app?user=${GITHUB_USERNAME}&theme=dark&hide_border=true&background=00000000&ring=fa0f69&currStreakLabel=ff1b6b&fire=ff4081&currStreakNum=ffffff&sideNums=ffffff&sideLabels=a1a1aa&dates=a1a1aa`}
                        />
                        <img
                          src={`https://nirzak-streak-stats.vercel.app?user=${GITHUB_USERNAME}&theme=light`}
                          className="w-full h-auto rounded-2xl"
                          loading="lazy"
                          alt="GitHub Streak Stats"
                          onError={(e) => {
                            console.error(
                              "GitHub Streak Stats image failed to load:",
                              e
                            );
                            console.log(
                              "Attempted URL:",
                              `https://nirzak-streak-stats.vercel.app?user=${GITHUB_USERNAME}&theme=light`
                            );
                          }}
                          onLoad={() =>
                            console.log(
                              "GitHub Streak Stats image loaded successfully"
                            )
                          }
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Visit GitHub Profile Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center pt-8"
            >
              <motion.a
                href={githubData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 p-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-[#fa0f69] to-[#ff1b6b] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#fa0f69]/25 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                Visit GitHub Profile
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <PiSmileySad className="text-6xl text-[#fa0f69] mb-4" />
            <p className="text-neutral-300 text-lg">
              Unable to load GitHub data at this time.
            </p>
            <p className="text-neutral-400 text-sm mt-2">
              Please check your connection and try again later.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
