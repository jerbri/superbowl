var data = {
  "props": [
    // =========================
    // GAME / TEAM TOTALS (all "Over" so they can be triggered mid-game)
    // =========================
    { "Name": "Total Points:", "A": "Over 45.5", "B": "Over 49.5" }, // total line 45.5 is widely posted :contentReference[oaicite:0]{index=0}
    { "Name": "1st Half Total Points:", "A": "Over 21.5", "B": "Over 24.5" },
    { "Name": "1st Quarter Total Points:", "A": "Over 6.5", "B": "Over 9.5" },

    { "Name": "Seahawks Team Total Points:", "A": "Over 23.5", "B": "Over 27.5" },
    { "Name": "Patriots Team Total Points:", "A": "Over 20.5", "B": "Over 24.5" },

    { "Name": "Total Touchdowns (Both Teams):", "A": "Over 4.5", "B": "Over 5.5" },
    { "Name": "Total Field Goals Made (Both Teams):", "A": "Over 2.5", "B": "Over 3.5" },
    { "Name": "Total Extra Points Made:", "A": "Over 3.5", "B": "Over 4.5" },

    // =========================
    // GAME FLOW / “EVENT” PROPS (all are things that happen, not “No” outcomes)
    // =========================
    { "Name": "Lead Changes:", "A": "Over 1.5", "B": "Over 2.5" },
    { "Name": "Game Ties (including 0-0):", "A": "Over 1.5", "B": "Over 2.5" },
    { "Name": "Total Times Either Team Leads:", "A": "Over 2.5", "B": "Over 3.5" },

    { "Name": "Longest Touchdown:", "A": "Over 39.5yds", "B": "Over 49.5yds" },
    { "Name": "Longest Field Goal Made:", "A": "Over 44.5yds", "B": "Over 49.5yds" },
    { "Name": "Longest Play From Scrimmage:", "A": "Over 35.5yds", "B": "Over 45.5yds" },

    { "Name": "Defensive/Special Teams TD:", "A": "Over 0.5", "B": "Over 1.5" },
    { "Name": "Any Safety:", "A": "Over 0.5", "B": "Over 1.5" },
    { "Name": "Successful 2-Point Conversion:", "A": "Over 0.5", "B": "Over 1.5" },
    { "Name": "Missed Field Goal:", "A": "Over 0.5", "B": "Over 1.5" },
    { "Name": "Missed Extra Point:", "A": "Over 0.5", "B": "Over 1.5" },

    // =========================
    // PENALTIES / OFFICIATING (triggered “Over” only)
    // =========================
    { "Name": "Total Penalties (Both Teams):", "A": "Over 10.5", "B": "Over 12.5" },
    { "Name": "Total Accepted Penalty Yards:", "A": "Over 74.5", "B": "Over 89.5" },
    { "Name": "Offensive Holding Penalties:", "A": "Over 1.5", "B": "Over 2.5" },
    { "Name": "Pass Interference Penalties:", "A": "Over 0.5", "B": "Over 1.5" },
    { "Name": "Roughing the Passer Penalties:", "A": "Over 0.5", "B": "Over 1.5" },
    { "Name": "Replay Reviews:", "A": "Over 1.5", "B": "Over 2.5" },

    // =========================
    // “DRIVES / POSSESSIONS” STATS (triggered “Over” only)
    // =========================
    { "Name": "Total Punts:", "A": "Over 7.5", "B": "Over 9.5" },
    { "Name": "Total Sacks:", "A": "Over 5.5", "B": "Over 6.5" },
    { "Name": "Total Turnovers (INT + Fumbles Lost):", "A": "Over 2.5", "B": "Over 3.5" },
    { "Name": "Total Interceptions:", "A": "Over 1.5", "B": "Over 2.5" },
    { "Name": "Total 4th Down Conversions:", "A": "Over 1.5", "B": "Over 2.5" },

    // =========================
    // QB PROPS (Seahawks: Sam Darnold; Patriots: Drake Maye)
    // =========================
    { "Name": "Sam Darnold passing yards:", "A": "Over 229.5yds", "B": "Over 249.5yds" }, // 229.5 :contentReference[oaicite:1]{index=1}
    { "Name": "Sam Darnold pass attempts:", "A": "Over 29.5", "B": "Over 34.5" }, // 29.5 :contentReference[oaicite:2]{index=2}
    { "Name": "Sam Darnold passing TDs:", "A": "Over 1.5", "B": "Over 2.5" },
    { "Name": "Sam Darnold interceptions:", "A": "Over 0.5", "B": "Over 1.5" },

    { "Name": "Drake Maye rushing (longest rush):", "A": "Over 13.5yds", "B": "Over 17.5yds" }, // 13.5 :contentReference[oaicite:3]{index=3}
    { "Name": "Drake Maye completions:", "A": "Over 19.5", "B": "Over 23.5" }, // “20+ completions” angle :contentReference[oaicite:4]{index=4}
    { "Name": "Drake Maye passing TDs:", "A": "Over 1.5", "B": "Over 2.5" },
    { "Name": "Drake Maye interceptions:", "A": "Over 0.5", "B": "Over 1.5" },

    // =========================
    // RB / SKILL PLAYER PROPS (more specific skill players, all “Over”)
    // =========================
    { "Name": "Kenneth Walker III rushing yards:", "A": "Over 63.5yds", "B": "Over 73.5yds" }, // 73.5 line referenced :contentReference[oaicite:5]{index=5}
    { "Name": "Kenneth Walker III receptions:", "A": "Over 2.5", "B": "Over 3.5" }, // 2.5 :contentReference[oaicite:6]{index=6}
    { "Name": "Kenneth Walker III rush attempts:", "A": "Over 16.5", "B": "Over 19.5" },

    { "Name": "George Holani receptions:", "A": "Over 1.5", "B": "Over 2.5" }, // 1.5 :contentReference[oaicite:7]{index=7}
    { "Name": "George Holani rushing yards:", "A": "Over 10.5yds", "B": "Over 19.5yds" }, // opposite side of the 10.5 market :contentReference[oaicite:8]{index=8}

    { "Name": "Rhamondre Stevenson rushing yards:", "A": "Over 49.5yds", "B": "Over 64.5yds" },
    { "Name": "Rhamondre Stevenson receptions:", "A": "Over 2.5", "B": "Over 3.5" },

    { "Name": "TreVeyon Henderson receptions:", "A": "Over 0.5", "B": "Over 1.5" }, // opposite side of the 0.5 market :contentReference[oaicite:9]{index=9}

    { "Name": "Hunter Henry receiving yards:", "A": "Over 39.5yds", "B": "Over 49.5yds" }, // 39.5 :contentReference[oaicite:10]{index=10}
    { "Name": "Hunter Henry receptions:", "A": "Over 3.5", "B": "Over 4.5" },

    { "Name": "Stefon Diggs longest reception:", "A": "Over 17.5yds", "B": "Over 24.5yds" }, // 17.5 market exists :contentReference[oaicite:11]{index=11}
    { "Name": "Stefon Diggs receiving yards:", "A": "Over 44.5yds", "B": "Over 59.5yds" },
    { "Name": "Stefon Diggs receptions:", "A": "Over 4.5", "B": "Over 5.5" },

    // =========================
    // TEAM-SPECIFIC EXPLOSIVE / SCORING EVENTS
    // =========================
    { "Name": "Seahawks longest TD:", "A": "Over 39.5yds", "B": "Over 49.5yds" },
    { "Name": "Patriots longest TD:", "A": "Over 29.5yds", "B": "Over 39.5yds" },

    { "Name": "Seahawks total sacks:", "A": "Over 2.5", "B": "Over 3.5" },
    { "Name": "Patriots total sacks:", "A": "Over 2.5", "B": "Over 3.5" },

    { "Name": "Seahawks total field goals made:", "A": "Over 1.5", "B": "Over 2.5" },
    { "Name": "Patriots total field goals made:", "A": "Over 1.5", "B": "Over 2.5" },

    // =========================
    // COMMERCIALS (actual 2026 advertisers / known brands in the Super Bowl LX ad pool)
    // =========================
    { "Name": "Commercial:", "A": "T-Mobile", "B": "Volkswagen" }, // :contentReference[oaicite:12]{index=12}
    { "Name": "Commercial:", "A": "Dunkin'", "B": "Pringles" }, // :contentReference[oaicite:13]{index=13}
    { "Name": "Commercial:", "A": "Amazon Echo (Alexa)", "B": "Ring" }, // :contentReference[oaicite:14]{index=14}
    { "Name": "Commercial:", "A": "Pepsi Zero Sugar", "B": "Poppi" }, // :contentReference[oaicite:15]{index=15}
    { "Name": "Commercial:", "A": "Comcast/Xfinity", "B": "Telemundo" }, // :contentReference[oaicite:16]{index=16}
    { "Name": "Commercial:", "A": "Paramount Pictures (Scream 7)", "B": "Pokémon" }, // :contentReference[oaicite:17]{index=17}
    { "Name": "Commercial:", "A": "Salesforce", "B": "Bosch Home" }, // :contentReference[oaicite:18]{index=18}
    { "Name": "Commercial:", "A": "Dove (Skin Care)", "B": "Anthropic" }, // :contentReference[oaicite:19]{index=19}
    { "Name": "Commercial:", "A": "Genspark", "B": "Amazon Echo (Alexa)" }, // :contentReference[oaicite:20]{index=20}
    { "Name": "Commercial:", "A": "Volkswagen", "B": "T-Mobile" } // :contentReference[oaicite:21]{index=21}
  ]
}
