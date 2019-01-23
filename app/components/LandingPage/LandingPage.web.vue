<template>
  <div>
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{title}}</span>
      </md-app-toolbar>
    </md-app>
    <div class="container">
      <div class="md-layout md-gutter md-alignment-center-center">
        <md-button
          class="md-raised md-primary"
          v-stream:click.native="getTableData$"
        >{{excelButton}}</md-button>
      </div>
      <div v-if="busy" class="md-layout md-gutter md-alignment-center-center">
        <md-progress-spinner class="md-accent" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
      </div>
      <div v-if="monthlyMeterData.length>0">
      <md-table v-model="monthlyMeterData" md-card md-fixed-header>
        <md-table-toolbar>
          <h1 class="md-title">Parsed Excel</h1>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Region">{{ item.region }}</md-table-cell>
          <md-table-cell md-label="January" md-numeric>{{ getMonthData(item.monthlyCount,'January') }}</md-table-cell>
          <md-table-cell md-label="February" md-numeric>{{ getMonthData(item.monthlyCount,'February') }}</md-table-cell>
          <md-table-cell md-label="March" md-numeric>{{ getMonthData(item.monthlyCount,'March') }}</md-table-cell>
          <md-table-cell md-label="April" md-numeric>{{ getMonthData(item.monthlyCount,'April') }}</md-table-cell>
          <md-table-cell md-label="May" md-numeric>{{ getMonthData(item.monthlyCount,'May') }}</md-table-cell>
          <md-table-cell md-label="June" md-numeric>{{ getMonthData(item.monthlyCount,'June') }}</md-table-cell>
          <md-table-cell md-label="July" md-numeric>{{ getMonthData(item.monthlyCount,'July') }}</md-table-cell>
          <md-table-cell md-label="August" md-numeric>{{ getMonthData(item.monthlyCount,'August') }}</md-table-cell>
          <md-table-cell md-label="September" md-numeric>{{ getMonthData(item.monthlyCount,'September') }}</md-table-cell>
          <md-table-cell md-label="October" md-numeric>{{ getMonthData(item.monthlyCount,'October') }}</md-table-cell>
          <md-table-cell md-label="November" md-numeric>{{ getMonthData(item.monthlyCount,'November') }}</md-table-cell>
          <md-table-cell md-label="December" md-numeric>{{ getMonthData(item.monthlyCount,'December') }}</md-table-cell>
          <md-table-cell md-label="Total" md-numeric>{{ getTotal(item.monthlyCount) }}</md-table-cell>
        </md-table-row>
      </md-table>
      </div>
    </div>
  </div>
</template>

<script>
import LandingPageService from "./LandingPageService";

export default {
  mixins: [LandingPageService]
};
</script>

<style lang="scss">
.container {
  padding: 10px 20px;
}
.md-table-content {
  max-height: 600px;
  overflow: scroll;
}
</style>
