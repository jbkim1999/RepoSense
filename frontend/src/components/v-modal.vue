<template lang="pug">
transition(name='modal')
  .modal-mask(v-if='show')
    .modal-wrapper
      .modal-container
        .modal-header
          h2  What does this number mean?
        .modal-body
          | This number means that the selected group,
          | when sorted by contribution in {{ contributionOrder }} order,
          | belongs to the top {{ percentile }} % of the whole cohort.
        .modal-footer
          button.modal-default-button(@click="$emit('close')")
            | OK
</template>

<script>
export default {
  props: ['show', 'percentile', 'sortGroupSelection'],
  computed: {
    contributionOrder() {
      return this.sortGroupSelection === 'totalCommits dsc' ? 'descending' : 'ascending';
    },
  },
};
</script>

<style lang="scss">
.modal-mask {
  background-color: rgba(0, 0, 0, .5);
  display: table;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity .3s ease;
  width: 100%;
  z-index: 9998;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  background-color: #fff;
  border: 2px solid #006600;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  height: 200px;
  margin: 0 auto;
  padding: 20px 30px;
  transition: all .3s ease;
  width: 325px;
}

.modal-header {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
