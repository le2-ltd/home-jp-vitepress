<script setup>
import { skillGroups } from "../data/siteContent";
</script>

<template>
  <section id="skills" class="le-section le-scroll-section">
    <p class="le-eyebrow">Technical capability</p>
    <div class="le-section__header">
      <h2>製品ライフサイクル全体を支える技術能力。</h2>
      <p>
        多職種の専門家が横断的に連携し、設計、実装、基盤、品質、管理までを一つの開発体制として動かします。
      </p>
    </div>

    <div class="le-capability-grid">
      <article
        v-for="group in skillGroups"
        :key="group.code"
        class="le-card le-capability-card"
        :class="`le-card--${group.tone}`"
      >
        <div class="le-card__topline">
          <span>{{ group.code }}</span>
        </div>
        <h2>{{ group.title }}</h2>
        <p>{{ group.body }}</p>
        <div class="le-tag-list">
          <span v-for="tag in group.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
