<script setup>
/**
 * BaseSelect — liste déroulante réutilisable (Genre, Année, Trier par). S'utilise avec v-model.
 * Tâche FI2 · Sellé
 *
 * Props : label, options = [{ value, label }], modelValue — Événement : update:modelValue
 * TODO FI2 : style de la maquette (52 px, surtitre 11 px majuscules, chevron, états).
 */
defineProps({
  label: { type: String, required: true },
  options: { type: Array, required: true },
  modelValue: { type: [String, Number, null], default: null },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="stub">
    {{ label }}
    <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value || null)">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </label>
</template>

<style scoped></style>
