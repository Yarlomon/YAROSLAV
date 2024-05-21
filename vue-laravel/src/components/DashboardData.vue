<template>
  <div>
    <h1>Дашборд с данными</h1>
    <table>
      <thead>
        <tr>
          <th>first_name</th>
          <th>last_name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP-address</th>
          <th>date</th>
          <th>CAR</th>
          <th>CAR-VIN</th>
          <th>CAR-YEAR</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.ip_address }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.car }}</td>
          <td>{{ item.car_vin }}</td>
          <td>{{ item.car_year }}</td>
        </tr>
      </tbody>
    </table>

    <button @click="applyFilter('Female')">Фильтр по Female</button>
    <button @click="applySort('first_name')">Сортировка по имени</button>


  </div>
</template>

<script>
export default {

  methods: {
    applyFilter(filter) {
      this.$store.commit('applyFilter', filter);
    },
    applySort(sortBy) {
      this.$store.commit('applySort', sortBy);
    },
  },
  mounted() {
    this.$store.dispatch('fetchData');
  },
  data() {
    return {
      data: [
        { id: 1, first_name: 'Nancy', last_name: 'Elderkin', email: 'nelderkin0@cdbaby.com', gender: 'Genderfluid', ip_address: '',date: '2022/04/15', car: '', car_vin: '1FTMF1E85AK882595', car_year: 2000 },
        { id: 2, first_name: 'Debbie', last_name: 'Float', email: '', gender: 'Genderqueer', ip_address: '37.41.89.245', date: '2018/04/29', car: '', car_vin: '3D7TP2CT1BG147233', car_year: 2007 },
        { id: 3, first_name: 'Ara', last_name: 'Shorton', email: 'ashorton2@bloglines.com', gender: 'Agender', ip_address: '62.97.216.244', date: '2005/05/22', car: '645', car_vin: '1J4PN2GK7AW575420', car_year: 2004 },
        { id: 4, first_name: 'Hugues', last_name: 'Lovitt', email: 'hlovitt3@illinois.edu', gender: 'Male', ip_address: '149.157.179.255', date: '2003/10/09', car: '', car_vin: 'WBA3A9C5XCF342379', car_year: 1990 },
        { id: 5, first_name: 'Camel', last_name: 'OMullaney', email: 'comullaney4@amazon.co.uk', gender: 'Female', ip_address: '117.160.42.72', date: '2007/03/04', car: '', car_vin: '1G6DP5E32D0583211', car_year:1992 },
        { id: 6, first_name: 'Jolie', last_name: 'Deaves', email: 'jdeaves5@netlog.com', gender: 'Polygender', ip_address: '9.12.189.41', date: '2007/12/17', car: 'Sable', car_vin: 'WAUFFAFL0AN303376', car_year: 1987 },
        { id: 7, first_name: 'Vanda', last_name: 'Peakman', email: 'vpeakman6@tuttocitta.it', gender: 'Female', ip_address: '80.83.4.49', date: '2020/09/15', car: '', car_vin: 'WAUBF78E57A492669', car_year: 2000 },
        { id: 8, first_name: 'Gaston', last_name: 'Marshman', email: 'gmarshman7@odnoklassniki.ru', gender: 'Male', ip_address: '131.28.46.231', date: '2020/11/01', car: 'Ram Van 1500', car_vin: '3D7TT2HT0AG341853', car_year: 2002 },
        { id: 9, first_name: 'Agace', last_name: 'Bartolomeu', email: 'abartolomeu8@drupal.org', gender: 'Polygender', ip_address: '82.125.252.45', date: '2012/10/30', car: 'Civic', car_vin: '3D4PG1FG2BT622807', car_year: 2001 },
        { id: 10, first_name: 'Emilie', last_name: 'Passy', email: 'epassy9@google.com.au', gender: 'Genderfluid', ip_address: '146.40.191.240', date: '2008/04/06', car: 'Venza', car_vin: '19UYA42581A044762', car_year: 2009 },
        { id: 11, first_name: 'Tripp', last_name: 'Patria', email: 'tpatriaa@oakley.com', gender: 'Male', ip_address: '49.184.148.114', date: '2005/07/03', car: 'Grand Marquis', car_vin: 'WBASP2C50DC361513', car_year: 2008 },
        { id: 12, first_name: 'Obed', last_name: 'Deadman', email: 'odeadmanb@economist.com', gender: 'Male', ip_address: '75.215.166.64', date: '2023/01/06', car: '928', car_vin: 'WBAFR9C59BD523442', car_year: 1990 },
        { id: 13, first_name: 'Ernesto', last_name: 'Pepperell', email: 'epepperellc@simplemachines.org', gender: 'Male', ip_address: '', date: '2009/01/26', car: 'Cayman', car_vin: 'JM1GJ1T63E1690989', car_year: 2010 },
        { id: 14, first_name: 'Ludwig', last_name: 'Kalewwe', email: 'lkalewed@shop-pro.jp', gender: 'Male', ip_address: '237.165.32.68', date: '2015/09/12', car: 'Tundra', car_vin: 'JHMFA3F25AS629677', car_year: 2010 },
        { id: 15, first_name: 'Elmore', last_name: 'Skyner', email: 'eskynere@springer.com', gender: 'Genderqueer', ip_address: '58.5.17.198', date: '2021/09/29', car: 'Cobalt SS', car_vin: '19XFB4F38EE932412', car_year: 2008 }
      ]
    };
  },
  computed: {
    dashboardData() {
      return this.$store.state.filteredData; 
    }
  },
  mounted() {
    this.$store.dispatch('fetchData');
  }

};
</script>