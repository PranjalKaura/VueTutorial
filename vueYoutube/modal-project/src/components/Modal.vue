<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme==='sale'}">
          <slot></slot>
          <div class="actions">
            <slot name="links"></slot>
          </div>
        </div>
    </div>
    <br>
    <div class="backdrop" @click.self="closeModal2">
        <div class="modal" v-if="userName==='Pranjal'">
          <slot name="authorise"></slot>
        </div>
        <div class="modal" v-else>
          <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: ['theme', "userName"],
  methods: {
    closeModal() {
      this.$emit('close');
    },
    closeModal2() {
      this.$emit('close2');
    }
  }
}
</script>


<style>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.24);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color:green;
    border: none;
    padding: 0;
  }
  .modal p {
    font-style: normal;
    color: aqua;
  }

  .modal.sale {
    background: crimson;
    color: white;
  }
  .modal.sale h1{
    color: white;
  }

  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
    color: #333;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }

  .modal.sale .actions {
    color: white;
  }
  .modal.sale .actions a {
    color: white;
  }
  </style>