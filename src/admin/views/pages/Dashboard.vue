<template>
  <div class="dashboard">
    <div class="selectYearh">
      <label>Chọn năm:</label>
      <Select v-model="yearhSelect">
        <Option
          v-for="item in yearhs"
          :key="item"
          :label="item"
          :value="item"
        />
      </Select>
    </div>
    <CChartBar
      :datasets="defaultDatasets"
      :labels="labels"
      :options="options"
    />
  </div>
</template>

<script>
import { CChartBar } from "@coreui/vue-chartjs";
import { mapActions, mapState } from "vuex";
import { Select, Option } from "element-ui";

export default {
  components: { CChartBar, Select, Option },

  data() {
    return {
      yearhs: [2019, 2020, 2021],
      yearhSelect: 2021
    };
  },

  computed: {
    ...mapState("orders", ["totalOrders"]),

    formatData() {
      let result = [];
      for (let i = 0; i < 12; i++) {
        result[i] = 0;
      }

      this.totalOrders.forEach(order => {
        result[order.month - 1] = order.total;
      });
      return result;
    },

    defaultDatasets() {
      return [
        {
          label: "Doanh thu tháng",
          backgroundColor: "#f87979",
          data: this.formatData
        }
      ];
    },

    labels() {
      return [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12"
      ];
    },

    options() {
      return {
        responsive: true,
        maintainAspectRatio: true
      };
    }
  },

  watch: {
    yearhSelect() {
      this.getTotalOrderByYear(this.yearhSelect);
    }
  },

  methods: {
    ...mapActions("orders", ["getTotalOrderByYear"])
  },

  mounted() {
    this.getTotalOrderByYear(this.yearhSelect);
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 30px 0;
  .selectYearh {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    label {
      margin: 0;
      margin-right: 12px;
      font-size: 16px;
    }
  }
}
</style>
