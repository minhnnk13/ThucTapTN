export default () => {
  return [
    {
      key: "tanggal",
      label: "Tanggal"
    },
    {
      key: "category.name",
      label: "Nama Produk",
      formatter: value => {
        if (value) {
          return value.charAt(0).toUpperCase() + value.substr(1)
        }
      }
    },
    {
      key: "code",
      label: "Kode Produk"
    },
    {
      key: "name",
      label: "Nama Produk"
    },
    {
      key: "user.name",
      label: "Pemilik"
    },
    {
      key: "actions",
      label: ""
    }
  ]
}
