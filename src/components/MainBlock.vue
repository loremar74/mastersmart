<template lang="pug">
.root(:class="{mobile}")
  .marks
    span.mark(
      v-for="mark in Object.keys(price)"
      :class="{selected: selectedMark === mark}"
      @click="selectedMark = mark"
    ) {{mark}}
  .models(v-if="Object.keys(price[selectedMark]).length > 1")
    span.model(
    v-for="model in Object.keys(price[selectedMark])"
    :class="{selected: selectedModel === model}"
    @click="selectedModel = model"
    ) {{model}}
  .jobs-n-image
    .jobs
      .job(v-for="job in Object.keys(price[selectedMark][selectedModel])" v-if="job !== '_image'")
        .name(v-html="job")
        .price(v-html="price[selectedMark][selectedModel][job]")
    .image(v-if="!mobile && price[selectedMark][selectedModel]['_image']")
      img(:src="price[selectedMark][selectedModel]['_image']")


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
}
</script>

<style scoped lang="stylus">
brand = #f52323
brand-hovered = #f2cdcf
brand-text = brand-hovered
price-text = #5e3e40
div-second-color = #dfebf1
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
    color: brand-text

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
    color: brand-text

.jobs-n-image
  width 95%
  display flex
  align-items flex-start

.image
  margin-left 15px

.jobs
.job
  width 100%

.name
.price
  width 50%
  display inline-block
  padding 20px 0 16px
  font-size 16px
  color price-text

.name
  text-align left
  border-bottom 3px solid brand
.price
  text-align right
  border-bottom 3px solid div-second-color
</style>
