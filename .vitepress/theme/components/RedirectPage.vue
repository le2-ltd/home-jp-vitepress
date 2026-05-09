<script setup>
import { onMounted } from "vue";

const props = defineProps({
  target: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  window.location.replace(props.target);
});
</script>

<template>
  <div class="le-page">
    <section class="le-redirect">
      <p class="le-eyebrow">Redirect</p>
      <h1>{{ label }} はトップページに統合されました。</h1>
      <p>自動で移動しない場合は、下のリンクから該当セクションへ移動してください。</p>
      <a class="le-button le-button--primary" :href="target">{{ label }}へ移動</a>
    </section>
  </div>
</template>
