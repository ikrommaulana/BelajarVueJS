'use strict';

new Vue({
  el: '#cruddasar',
  data: function() {
    return {
      dataStaff: [],
      inputDataStaff: {},
      enable: true
    }
  },
  methods: {
    generateUUID: function() {
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();
      }
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    },
    addStaff: function() {
      this.enable = true;
      this.inputDataStaff = {};
    },
    saveStaff: function(staff) {
      this.dataStaff.push({
        'idStaff': this.generateUUID(),
        'namaStaff': staff.namaStaff,
        'divStaff': staff.divStaff,
        'dateContract': staff.dateContract
      });
    },
    editStaff: function(staff) {
      this.enable = false;
      this.index = this.dataStaff.indexOf(staff);
      this.inputDataStaff.idStaff = staff.idStaff;
      this.inputDataStaff.namaStaff = staff.namaStaff;
      this.inputDataStaff.divStaff = staff.divStaff;
      this.inputDataStaff.dateContract = staff.dateContract;
    },
    updateStaff: function(staff) {
      this.dataStaff[this.index].idStaff = staff.idStaff;
      this.dataStaff[this.index].namaStaff = staff.namaStaff;
      this.dataStaff[this.index].divStaff = staff.divStaff;
      this.dataStaff[this.index].dateContract = staff.dateContract;
      this.inputDataStaff = {};
    },
    delStaff: function(staff) {
      var result = confirm('Anda ingin menghapus data karyawan ?');
      if (result) {
        this.index = this.dataStaff.indexOf(staff);
        this.dataStaff.splice(this.index, 1);
      }
    }
  }
});
