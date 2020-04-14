<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button>add task</button>
    <kanban-board :stages="stages" :blocks="blocks" @update-block="updateBlock">
      <div v-for="stage in stages" :slot="stage" :key="stage">
        <h2>{{ stage }}</h2>
      </div>
      <div v-for="block in blocks" :slot="block.id" :key="block.id">
        <div>
          <strong>id:</strong>
          {{ block.id }}
        </div>
        <div>
          <strong>品番:</strong>
          {{block.prod_nm}}
        </div>
        <div>
          <strong>計画数:</strong>
          {{block.plan_num}}
        </div>
        <div>
          <strong>生産数:</strong>
          {{block.prod_num}}
        </div>
        <div>
          <strong>残生産数:</strong>
          {{Number(block.plan_num) - Number(block.prod_num)}}
        </div>
      </div>
    </kanban-board>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stages: ["on-hold", "in-progress", "needs-review", "approved"],
      blocks: [
        {
          id: 1,
          status: "on-hold",
          title: "Test",
          prod_nm: "00001",
          prod_num: "2000",
          plan_num: "4000"
        },
        {
          id: 2,
          status: "on-hold",
          title: "TEST",
          prod_nm: "00002",
          prod_num: "2000",
          plan_num: "4000"
        }
      ]
    };
  },
  methods: {
    updateBlock(id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status;
    }
  }
};
</script>