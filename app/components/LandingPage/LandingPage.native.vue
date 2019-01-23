<template>
  <Page>
    <ActionBar class="action-bar" :title="title"></ActionBar>

    <StackLayout class="container">
      <Button class="btn btn-primary" @tap="getTableData$.next()" :text="excelButton"/>
      <ActivityIndicator :busy="busy" />
      <ScrollView orientation="horizontal" v-if="monthlyMeterData.length>0">
        <StackLayout orientation="vertical">
          <GridLayout
            columns="150,100,100,100,100,100,100,100,100,100,100,100,100,100"
            height="37"
            class="table table-standings"
          >
            <Label text="Region" col="0" class="th"/>
            <Label text="January" col="1" class="th"/>
            <Label text="February" col="2" class="th"/>
            <Label text="March" col="3" class="th"/>
            <Label text="April" col="4" class="th"/>
            <Label text="May" col="5" class="th"/>
            <Label text="June" col="6" class="th"/>
            <Label text="July" col="7" class="th"/>
            <Label text="August" col="8" class="th"/>
            <Label text="September" col="9" class="th"/>
            <Label text="October" col="10" class="th"/>
            <Label text="November" col="11" class="th"/>
            <Label text="December" col="12" class="th"/>
            <Label text="Total" col="13" class="th"/>
          </GridLayout>

          <RadListView for="item in monthlyMeterData" width="1450">
            <v-template>
              <GridLayout
                columns="150,100,100,100,100,100,100,100,100,100,100,100,100,100"
                class="table table-standings"
              >
                <Label :text="item.region" col="0"/>
                <Label :text="getMonthData(item.monthlyCount,'January')" col="1" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'February')" col="2" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'March')" col="3" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'April')" col="4" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'May')" col="5" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'June')" col="6" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'July')" col="7" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'August')" col="8" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'September')" col="9" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'October')" col="10" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'November')" col="11" class="td"/>
                <Label :text="getMonthData(item.monthlyCount,'December')" col="12" class="td"/>
                <Label :text="getTotal(item.monthlyCount)" col="13" class="td"/>
              </GridLayout>
            </v-template>
          </RadListView>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import LandingPageService from "./LandingPageService";

export default {
  mixins: [LandingPageService]
};
</script>

<style lang="scss" scoped>
.container {
  margin: 15 10;
}
.table {
  background-color: #fff;
}

.table-standings {
  border-width: 1 1 0 1;
  border-color: #e6eef4;
}

.table-standings label {
  white-space: nowrap;
  font-size: 12;
  color: #5c6265;
  vertical-align: middle;
}

.table-standings .th {
  background-color: #e6eef4;
}

.table-standings .th label {
  color: #00476d;
}

.table-standings .th,
.table-standings .td {
  padding: 10;
  border-bottom-width: 1;
  border-color: #e6eef4;
}
</style>
