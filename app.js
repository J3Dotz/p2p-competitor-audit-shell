/* Renders tabs, profiles, bar charts and the matrix from CONTENT (content.js). */
(function () {
  var C = CONTENT;
  var p2pId = C.companies.find(function (c) { return c.role === "benchmark"; }).id;

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // ---- Overview findings ----
  function renderFindings() {
    var el = document.getElementById("findings");
    el.innerHTML = C.findings.map(function (f) {
      return '<div class="finding-card"><span class="tag ' + f.tag + '">' + esc(f.tagLabel) + '</span><p>' + f.html + '</p></div>';
    }).join("");
  }

  // ---- Bar charts (one per criterion, sorted low->high, P2P + leader flagged) ----
  function renderBarCharts() {
    var el = document.getElementById("barCharts");
    el.innerHTML = C.criteria.map(function (crit) {
      var scores = C.scores[crit.id] || {};
      var rows = C.companies
        .filter(function (co) { return scores[co.id] != null; })
        .map(function (co) { return { co: co, score: scores[co.id] }; })
        .sort(function (a, b) { return a.score - b.score; });

      var leaderId = rows.length ? rows[rows.length - 1].co.id : null;
      var cappedNote = crit.id === "socialLinkedin"
        ? '<p class="chart-note"><b>Capped at 3–4 for every entity.</b> LinkedIn blocks the research access needed to verify posting cadence, so this chart currently confirms platform presence only — not activity. Don’t read it as a real differentiator without a manual, logged-in check.</p>'
        : "";

      var rowsHtml = rows.map(function (r) {
        var cls = "bar-row";
        if (r.co.id === p2pId) cls += " p2p";
        else if (r.co.id === leaderId && crit.id !== "socialLinkedin") cls += " leader";
        var pct = Math.max(2, (r.score / 10) * 100);
        return '<div class="' + cls + '"><span class="name">' + esc(r.co.name) + '</span>' +
          '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
          '<span class="score">' + r.score + '</span></div>';
      }).join("");

      return '<div class="bar-block" data-crit="' + crit.id + '">' +
        '<div class="bar-head"><h3>' + esc(crit.name) + '</h3><span>Scored 0–10 against the rubric · sorted low to high</span></div>' +
        rowsHtml +
        '<div class="bar-scale"><span>0</span><span>10</span></div>' +
        cappedNote +
        '</div>';
    }).join("");
  }

  // ---- Scoring rubric reference ----
  function renderRubric() {
    var el = document.getElementById("rubric");
    el.innerHTML = C.criteria.map(function (crit) {
      return '<div class="rubric-row"><span class="rubric-crit">' + esc(crit.name) + '</span><span class="rubric-band">' + esc(C.scoringRubric[crit.id]) + '</span></div>';
    }).join("");
  }

  // ---- Matrix: chips + table ----
  function renderMatrixControls() {
    var el = document.getElementById("critChips");
    var chips = ['<button class="chip active" data-crit="all">All criteria</button>'];
    C.criteria.forEach(function (crit) {
      chips.push('<button class="chip" data-crit="' + crit.id + '">' + esc(crit.name) + '</button>');
    });
    el.innerHTML = chips.join("");

    el.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        el.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        document.querySelectorAll("#matrixTable tbody tr").forEach(function (row) {
          row.classList.toggle("dim", !(chip.dataset.crit === "all" || row.dataset.row === chip.dataset.crit));
        });
      });
    });
  }

  function renderMatrixTable() {
    var thead = document.querySelector("#matrixTable thead tr");
    thead.innerHTML = "<th>Criteria</th>" + C.companies.map(function (co) {
      return "<th>" + esc(co.short) + "</th>";
    }).join("");

    var tbody = document.querySelector("#matrixTable tbody");
    tbody.innerHTML = C.criteria.map(function (crit) {
      var scores = C.scores[crit.id] || {};
      var cells = C.companies.map(function (co) {
        var text = (C.matrix[crit.id] || {})[co.id] || "—";
        var score = scores[co.id];
        var cls = co.id === p2pId ? ' class="p2pcol"' : "";
        return "<td" + cls + ">" + text + (score != null ? ' <span class="cell-score">' + score + '/10</span>' : "") + "</td>";
      }).join("");
      return '<tr data-row="' + crit.id + '"><td class="crit">' + esc(crit.name) + "</td>" + cells + "</tr>";
    }).join("");
  }

  // ---- Profile tabs ----
  function renderTabs() {
    var tabbar = document.getElementById("tabbar");
    tabbar.innerHTML = C.companies.map(function (co, i) {
      var label = co.role === "benchmark" ? co.name + " (baseline)" : co.name;
      return '<button class="tabbtn' + (i === 0 ? " active" : "") + '" data-tab="' + co.id + '">' + esc(label) + "</button>";
    }).join("");

    tabbar.querySelectorAll(".tabbtn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        tabbar.querySelectorAll(".tabbtn").forEach(function (b) { b.classList.remove("active"); });
        document.querySelectorAll(".profile").forEach(function (p) { p.classList.remove("active"); });
        btn.classList.add("active");
        var panel = document.querySelector('.profile[data-panel="' + btn.dataset.tab + '"]');
        if (panel) panel.classList.add("active");
      });
    });
  }

  function renderProfiles() {
    var el = document.getElementById("profiles-panels");
    el.innerHTML = C.companies.map(function (co, i) {
      var p = C.profiles[co.id] || {};
      var badgeHtml = "";
      if (co.role === "benchmark") badgeHtml = '<span class="badge benchmark">Benchmark</span>';
      else if (co.badge) badgeHtml = '<span class="badge leader">' + esc(co.badge) + '</span>';

      function bullets(arr) {
        return '<ul>' + (arr || []).map(function (item) { return '<li>' + item + '</li>'; }).join('') + '</ul>';
      }

      return '<div class="profile' + (i === 0 ? " active" : "") + '" data-panel="' + co.id + '">' +
        '<div class="profile-head"><h3>' + esc(co.name) + ' <a class="site-link" href="' + esc(co.url) + '" target="_blank" rel="noopener">' + esc(co.url.replace(/^https?:\/\//, "")) + '</a></h3>' + badgeHtml + '</div>' +
        '<div class="cols">' +
        '<div class="colblock good"><h4>What\'s working</h4>' + bullets(p.working) + '</div>' +
        '<div class="colblock bad"><h4>What\'s not</h4>' + bullets(p.notWorking) + '</div>' +
        '</div>' +
        '<div class="borrow">' + p.borrow + '</div>' +
        '</div>';
    }).join("");
  }

  // ---- Gaps, opportunities & lead magnets (deliverables 03 & 04) ----
  function renderGaps() {
    function gapItem(item) {
      return '<div class="gapitem"><span class="check" tabindex="0"></span>' +
        '<span class="gaptext"><b>' + esc(item.title) + '</b><br>' + item.detail + '</span></div>';
    }
    document.getElementById("quickWins").innerHTML = C.gaps.quickWins.map(gapItem).join("");
    document.getElementById("structural").innerHTML = C.gaps.structural.map(gapItem).join("");

    document.getElementById("leadMagnets").innerHTML = C.leadMagnets.map(function (m, i) {
      return '<div class="magnet-card"><span class="magnet-rank">0' + (i + 1) + '</span>' +
        '<h4>' + esc(m.title) + '</h4><p>' + m.detail + '</p></div>';
    }).join("");
  }

  // ---- Static-page interactions (gap checklist, scroll spy) ----
  function bindMisc() {
    document.querySelectorAll(".gapitem .check").forEach(function (box) {
      box.addEventListener("click", function () { box.classList.toggle("on"); });
    });

    var sections = document.querySelectorAll("main section");
    var navlinks = document.querySelectorAll("#navlist a");
    window.addEventListener("scroll", function () {
      var pos = window.scrollY + 100;
      sections.forEach(function (sec, i) {
        if (pos >= sec.offsetTop) {
          navlinks.forEach(function (l) { l.classList.remove("active"); });
          navlinks[i].classList.add("active");
        }
      });
    });
  }

  // ---- Measured PageSpeed data (0-100, Google Lighthouse — distinct from editorial scores) ----
  // Each flagged company's finding is a specific Lighthouse audit (HTTPS is a Best
  // Practices check; CLS/TBT/Core Web Vitals are Performance checks) — shown once,
  // under the one chart it's actually about, not repeated under all four metrics.
  var FLAG_METRIC = { ametros: "bestPractices", privacyhelper: "performance", pembroke: "performance", dpocentre: "performance" };

  function renderPageInsights() {
    var el = document.getElementById("perfCharts");
    if (!el || !C.pageInsights) return;
    var PI = C.pageInsights;

    el.innerHTML = PI.metrics.map(function (metric) {
      var scores = PI.scores[metric.id] || {};
      var rows = C.companies
        .filter(function (co) { return scores[co.id] != null; })
        .map(function (co) { return { co: co, score: scores[co.id] }; })
        .sort(function (a, b) { return a.score - b.score; });
      var leaderId = rows.length ? rows[rows.length - 1].co.id : null;

      var rowsHtml = rows.map(function (r) {
        var cls = "bar-row";
        if (r.co.id === p2pId) cls += " p2p";
        else if (r.co.id === leaderId) cls += " leader";
        var pct = Math.max(2, r.score);
        var flag = PI.flags && FLAG_METRIC[r.co.id] === metric.id ? PI.flags[r.co.id] : null;
        var flagHtml = flag ? '<div class="perf-flag">' + esc(flag) + '</div>' : '';
        return '<div class="' + cls + '"><span class="name">' + esc(r.co.name) + '</span>' +
          '<div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
          '<span class="score">' + r.score + '</span></div>' + flagHtml;
      }).join("");

      return '<div class="bar-block" data-perf="' + metric.id + '">' +
        '<div class="bar-head"><h3>' + esc(metric.name) + '</h3><span>Measured 0–100 (Google PageSpeed) · sorted low to high</span></div>' +
        rowsHtml +
        '<div class="bar-scale"><span>0</span><span>100</span></div>' +
        '</div>';
    }).join("") + '<p class="chart-note">' + esc(PI.meta) + '</p>';
  }

  renderFindings();
  renderBarCharts();
  renderPageInsights();
  renderRubric();
  renderMatrixControls();
  renderMatrixTable();
  renderTabs();
  renderProfiles();
  renderGaps();
  bindMisc();
})();
