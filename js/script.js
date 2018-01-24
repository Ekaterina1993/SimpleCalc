new Vue({
  el: '#calculator',
  data: {
    value: '',
    message: '0',
    equation: '',
    cal: ''
  },
  methods: {
    input: function(num) {
      if(num == '.' && this.message.includes('.'))
        return;
      else if(this.message == '0'){
        this.message = num;
        this.value = num;
      }
      else {
        this.value += num;
        this.message = this.value;
      }
    },
    clear: function() {
      if(this.message == '0')
        this.equation = '';
      this.message = '0';
      this.value = '';
    },
    operator: function(opt) {
      this.cal = opt;
      this.equation += this.value;
      this.message = eval(this.equation).toString();
      this.equation = this.message;
      this.equation += opt;
      this.value = '';
    },
    percentage: function() {
      this.equation = '';
      this.message = (this.message/100).toString();
      this.value = this.message;
    },
    inverse : function() {
      if (this.message == 0)
        return false;
      this.equation = '';
      if(this.message[0] == '-')
        this.message = this.message.substr(1);
      else
        this.message = '-' + this.message;
      this.value = this.message;
    },
    equal: function() {
      if(this.equation == '')
        return;
      if(this.cal != '')
        this.equation += this.message;
      this.message = eval(this.equation).toString();
      this.value = '';
      this.cal = '';
      this.equation = this.message;
    }
  }
})
