<template lang="pug">
.root(:class="{mobile}")
  .marks
    span.mark(
      v-for="mark in Object.keys(price)"
      :class="{selected: selectedMark === mark}"
      @click="selectedMark = mark"
    ) {{mark}}
  .models
    span.model(
    v-for="model in Object.keys(price[selectedMark])"
    :class="{selected: selectedModel === model}"
    @click="selectedModel = model"
    ) {{model}}
  .jobs
    .job(v-for="job in Object.keys(price[selectedMark][selectedModel])")
      .name {{job}}
      .price {{price[selectedMark][selectedModel][job]}}


</template>

<script>
export default {
  props: {
    price: Object,
  },
  data() {
    return {
      selectedMark: Object.keys(this.price)[0],
      selectedModel: null,
    }
  },
  watch: {
    selectedMark: {
      immediate: true,
      handler() {
        this.selectedModel = Object.keys(this.price[this.selectedMark])[0]
      }
    }
  },
  methods: {
    reach(id) {
      if (!window.yaCounter48187421)
        return
      window.yaCounter48187421.reachGoal(id)
    },
  },
}
</script>

<style scoped lang="stylus">
brand = #dae8ef
brand-mark-text = #494648
brand-model-text = #365c70
brand-hovered = #eaeff2
div-second-color = #dfebf1
div-main-color = #c0056b
.root
  width 100%
  display flex
  flex-direction column
  align-items center
  box-sizing border-box
  -webkit-tap-highlight-color transparent !important

  *
    box-sizing border-box
    font-weight inherit

  &.mobile
    width 100%
    .marks
      flex-direction column

.marks
  display inline-flex
  border-radius 30px
  border 1px solid brand
  overflow hidden
  margin 18px 0 39px

.mark
  font-size 24px
  padding 6px 12px
  width 200px
  height 62px
  display flex
  align-items center
  justify-content center
  cursor pointer
  &:hover
    background-color brand-hovered
  &.selected
    background-color brand
    color: brand-mark-text

.models
  display flex
  justify-content center
  flex-wrap wrap
  margin-bottom 12px

.model
  padding: 6px 12px;
  font-size 24px
  border-radius 30px
  height 62px
  min-width 62px
  margin-right 2px
  margin-bottom: 10px;
  display flex
  align-items center
  justify-content center
  cursor pointer
  border 1px solid brand
  &:hover
    background-color brand-hovered
  &.selected
    background-color brand
    color: brand-model-text

.jobs
  width 95%

.job
  width 100%

.name
.price
  width 50%
  display inline-block
  padding 20px 0 16px
  font-size 16px
  color brand-mark-text

.name
  text-align left
  border-bottom 3px solid div-main-color
.price
  text-align right
  border-bottom 3px solid div-second-color
</style>
