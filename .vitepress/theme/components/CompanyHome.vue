<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import EngineeringSection from "./EngineeringSection.vue";
import SkillsSection from "./SkillsSection.vue";

const navSections = ["about", "skills", "engineering", "contact"];
let observer;

const updateHash = (section) => {
  const nextHash = `#${section}`;
  if (window.location.hash === nextHash) {
    return;
  }

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${nextHash}`);
};

const setCurrentSection = (section, options = {}) => {
  document.body.dataset.leSection = section;

  if (options.syncHash) {
    updateHash(section);
  }
};

const syncSectionFromHash = () => {
  const hashSection = window.location.hash.replace("#", "");
  if (navSections.includes(hashSection)) {
    setCurrentSection(hashSection);
  }
};

onMounted(() => {
  setCurrentSection(navSections.includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : "about", {
    syncHash: true,
  });
  window.addEventListener("hashchange", syncSectionFromHash);

  observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (activeEntry?.target?.id) {
        setCurrentSection(activeEntry.target.id, { syncHash: true });
      }
    },
    {
      rootMargin: "-24% 0px -58% 0px",
      threshold: [0.1, 0.25, 0.5],
    },
  );

  navSections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) {
      observer.observe(element);
    }
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("hashchange", syncSectionFromHash);
  observer?.disconnect();
  delete document.body.dataset.leSection;
});
</script>

<template>
  <div class="le-page le-home">
    <section id="about" class="le-hero le-hero--split le-scroll-section">
      <div class="le-hero__copy">
        <p class="le-eyebrow">Japan-focused offshore delivery</p>
        <h1>
          <span>日本市場向け</span>
          <span>ソフトウェア開発</span>
        </h1>
        <p class="le-lead">
          社内開発リソースの不足、追加開発の停滞、品質確認の負荷を、
          中国拠点の専任チームで補完します。要件整理から設計、実装、試験、
          納品後の改善まで、コスト効率と工程品質を両立します。
        </p>
        <div class="le-hero-sales" aria-label="Le2 sales points">
          <div>
            <span>対象</span>
            <strong>プロダクト開発、業務システム改善、追加開発を外部チームと進めたい日本企業</strong>
          </div>
          <div>
            <span>解決</span>
            <strong>開発コストを抑えながら、納期、品質、変更対応を工程として管理します</strong>
          </div>
          <div>
            <span>理由</span>
            <strong>円建て対応、専任体制、PMO・DEV・QAの週次レビューで進行を透明化します</strong>
          </div>
        </div>
        <div class="le-actions">
          <a class="le-button le-button--primary" href="mailto:b@le2.ltd">開発相談をする</a>
          <a class="le-button le-button--secondary" href="#engineering">工程品質を見る</a>
        </div>
      </div>

      <div class="le-delivery-map" aria-label="Delivery flow">
        <div class="le-delivery-map__header">
          <span>PROJECT PIPELINE</span>
          <strong>Le2 Delivery System</strong>
        </div>
        <div class="le-flow">
          <span>要求確認</span>
          <span>設計</span>
          <span>実装</span>
          <span>レビュー</span>
          <span>納品</span>
        </div>
        <div class="le-lanes">
          <div><span>PMO</span><strong>進捗・リスク管理</strong></div>
          <div><span>DEV</span><strong>フロント / バックエンド</strong></div>
          <div><span>QA</span><strong>手動・自動テスト</strong></div>
        </div>
      </div>
    </section>

    <section class="le-section le-section--compact le-scroll-section">
      <p class="le-eyebrow">Why Le2</p>
      <div class="le-proof-grid">
        <article>
          <span>01</span>
          <strong>専任体制</strong>
          <p>案件ごとに役割と責任を明確化し、意思決定と実装速度を高めます。</p>
        </article>
        <article>
          <span>02</span>
          <strong>円建て対応</strong>
          <p>日本企業との取引を前提に、コスト管理しやすい契約運用に対応します。</p>
        </article>
        <article>
          <span>03</span>
          <strong>品質レビュー</strong>
          <p>PMO、開発、QAが週次で課題を確認し、リリースリスクを抑えます。</p>
        </article>
        <article>
          <span>04</span>
          <strong>継続改善</strong>
          <p>納品後のフィードバックを次の計画に反映し、価値提供を継続します。</p>
        </article>
      </div>
    </section>

    <section class="le-section le-scroll-section">
      <p class="le-eyebrow">Service value</p>
      <div class="le-section__header">
        <h2>日本側の事業判断と、中国側の開発実行をつなぐ。</h2>
        <p>
          案件ごとに集中できるチームを組成し、仕様変更や優先順位の変化にも対応できる運用を設計します。
          オフショアのリソース力と標準化された進行管理により、納期、品質、コストのバランスを取りながら成果物を届けます。
        </p>
      </div>
      <div class="le-feature-grid le-feature-grid--three">
        <article class="le-card le-card--accent">
          <span>01</span>
          <h3>立ち上げを速く</h3>
          <p>要件整理、体制設計、スケジュール策定を初期段階で揃え、開発開始までの摩擦を減らします。</p>
        </article>
        <article class="le-card">
          <span>02</span>
          <h3>品質を見える化</h3>
          <p>テストケース、課題ログ、レビュー基準を運用し、進捗だけでなく品質状態も確認できる形にします。</p>
        </article>
        <article class="le-card">
          <span>03</span>
          <h3>改善を止めない</h3>
          <p>納品後のフィードバック、残課題の再見積もり、次イテレーション計画まで継続的に支援します。</p>
        </article>
      </div>
    </section>

    <section class="le-section le-section--raised le-scroll-section">
      <div>
        <p class="le-eyebrow">Delivery model</p>
        <h2>若手中心の実行力を、標準化された工程で支える。</h2>
      </div>
      <div class="le-copy-stack">
        <p>
          素早い意思決定と実行を強みに、内省とオープンな対話を通じてプロダクト品質を磨き続けています。
          標準化フェーズに入った組織として、役割と責任を明確にし、複雑な案件でも滑らかな連携を実現します。
        </p>
        <p>
          自由闊達なカルチャーのもと、多様な視点や発想を歓迎しています。
          変化を楽しみながら価値を創りたい仲間を探しています。
        </p>
      </div>
    </section>

    <SkillsSection />

    <EngineeringSection />

    <section class="le-section le-scroll-section">
      <p class="le-eyebrow">Before consultation</p>
      <div class="le-section__header">
        <h2>相談前にわかること。</h2>
        <p>
          開発相談の前に確認されやすい内容をまとめています。
          まだ仕様が固まっていない段階でも、課題、優先度、現在の体制から整理できます。
        </p>
      </div>
      <div class="le-question-grid">
        <article class="le-question-card">
          <span>Q1</span>
          <h3>どの規模から相談できますか。</h3>
          <p>
            小さな追加開発、既存機能の改善、テスト体制の補強から相談できます。
            必要な役割と期間を確認し、段階的に体制を組みます。
          </p>
        </article>
        <article class="le-question-card">
          <span>Q2</span>
          <h3>既存システム改修に対応できますか。</h3>
          <p>
            既存コード、仕様書、課題ログを確認し、影響範囲を整理したうえで進めます。
            改修と同時にテスト観点や運用課題も見える化します。
          </p>
        </article>
        <article class="le-question-card">
          <span>Q3</span>
          <h3>日本語でのやり取りは可能ですか。</h3>
          <p>
            日本企業との取引を前提に、要件確認、進捗共有、課題整理を日本語で進めます。
            必要に応じて資料ベースで認識を揃えます。
          </p>
        </article>
        <article class="le-question-card">
          <span>Q4</span>
          <h3>見積もり前に何を共有すればよいですか。</h3>
          <p>
            実現したいこと、現在困っていること、希望時期、既存資料の有無を共有ください。
            詳細仕様が未確定でも、初期整理から相談できます。
          </p>
        </article>
      </div>
    </section>

    <section id="contact" class="le-cta le-scroll-section">
      <div class="le-cta__content">
        <div class="le-cta__copy">
          <p class="le-eyebrow">Start a conversation</p>
          <h2>開発体制、コスト、品質管理の相談から始められます。</h2>
          <p>
            仕様が固まりきっていない段階でも大丈夫です。
            現在の課題と希望時期を共有いただければ、進め方と体制の整理から対応します。
          </p>
          <div class="le-actions">
            <a
              class="le-button le-button--primary"
              href="mailto:b@le2.ltd?subject=%E9%96%8B%E7%99%BA%E7%9B%B8%E8%AB%87"
            >
              メールで相談する
            </a>
            <a class="le-button le-button--secondary" href="#engineering">工程品質を確認する</a>
          </div>
        </div>

        <div class="le-contact-panel">
          <p class="le-contact-panel__title">相談内容の例</p>
          <ul class="le-contact-list">
            <li>新規開発、既存システム改善、追加開発の進め方を相談したい</li>
            <li>開発コストを抑えながら、品質確認やレビュー体制を整えたい</li>
            <li>既存資料や課題ログをもとに、影響範囲と見積もりの前提を整理したい</li>
            <li>日本語で進捗共有しながら、中国拠点の開発チームを活用したい</li>
          </ul>
          <p class="le-contact-note">
            メールには、実現したいこと、現在困っていること、希望時期、既存資料の有無をお書きください。
            宛先は <a href="mailto:b@le2.ltd">b@le2.ltd</a> です。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
