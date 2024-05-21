<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    fetchData() {
      // Мокап данных для примера
      this.items = [
        { id: 1, text: 'Элемент 1' },
        { id: 2, text: 'Элемент 2' },
        { id: 3, text: 'Элемент 3' }
      ];
    }
  }
};
</script>