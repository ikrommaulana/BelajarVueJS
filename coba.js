'use strict';

new Vue({
  el: '#belajar',
  data: function() {
    return {
      dataBarang: [],
      inputDataBarang: {},
      enable: false
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
    tambahBarang: function() {
      this.enable = true;
      this.inputDataBarang = {};
    },
    simpanBarang: function(barang) {
      this.dataBarang.push({
        'idBarang': this.generateUUID(),
        'namaBarang': barang.namaBarang,
        'jenisBarang': barang.jenisBarang,
        'tanggalKadaluarsa': barang.tanggalKadaluarsa
      });
    },
    editBarang: function(barang) {
      this.enable = false;
      this.index = this.dataBarang.indexOf(barang);
      this.inputDataBarang.idBarang = barang.idBarang;
      this.inputDataBarang.namaBarang = barang.namaBarang;
      this.inputDataBarang.jenisBarang = barang.jenisBarang;
      this.inputDataBarang.tanggalKadaluarsa = barang.tanggalKadaluarsa;
    },
    updateBarang: function(barang) {
      this.dataBarang[this.index].idBarang = barang.idBarang;
      this.dataBarang[this.index].namaBarang = barang.namaBarang;
      this.dataBarang[this.index].jenisBarang = barang.jenisBarang;
      this.dataBarang[this.index].tanggalKadaluarsa = barang.tanggalKadaluarsa;
      this.inputDataBarang = {};
    },
    hapusBarang: function(barang) {
      var result = confirm('Anda ingin menghapus data barang ?');
      if (result) {
        this.index = this.dataBarang.indexOf(barang);
        this.dataBarang.splice(this.index, 1);
      }
    }
  }
});
