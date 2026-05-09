<script setup>
import { engineeringCapabilities, engineeringPhases } from "../data/siteContent";
</script>

<template>
  <section id="engineering" class="le-section le-scroll-section">
    <p class="le-eyebrow">Engineering system</p>
    <div class="le-section__header">
      <h2>スピードと品質を同時に制御する工程設計。</h2>
      <p>
        要件定義からリリース、運用までの各フェーズに統一ルールを整備し、
        役割、成果物、判断基準を明文化しています。
      </p>
    </div>

    <div class="le-process-grid">
      <article v-for="phase in engineeringPhases" :key="phase.title" class="le-card le-process-card">
        <span>{{ phase.title }}</span>
        <ul>
          <li v-for="item in phase.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>

    <div class="le-capability-grid le-capability-grid--compact le-section__subgrid">
      <article v-for="capability in engineeringCapabilities" :key="capability.title" class="le-card le-card--compact">
        <h2>{{ capability.title }}</h2>
        <p>{{ capability.body }}</p>
      </article>
    </div>
  </section>
</template>
