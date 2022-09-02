<template>
  <div>
    <input
      type="text"
      v-if="isTrue"
      @blur="addfn"
      style="width: 100px"
      v-foucse
      v-model="tag"
      @keyup.esc="tag = ''"
      @keyup.enter="addfn"
    />
    <button @click="isTrue = true" v-else class="btn btn-primary btn-sm">
      +Tig
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isTrue: false,
      tag: ''
    }
  },
  methods: {
    addfn () {
      this.isTrue = false
      if (this.tag.trim() !== '') {
        this.$emit('addTitle', this.tag)
      }
      this.tag = ''
    }
  }
}
</script>

<style></style>
