<template>
  <div class="pay">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="title">Thông tin thanh toán</div>
          <div class="input-row">
            <div class="input-field">
              <base-input
                :class="{ required: !fieldValidate.firstName.isValidate }"
                v-model="order.firstName"
                >Họ <span>*</span>
                <span
                  slot="tooltip"
                  class="tooltip tooltip--input"
                  v-if="!fieldValidate.firstName.isValidate"
                >
                  Dữ liệu không được để trống
                </span></base-input
              >
            </div>
            <div class="input-field">
              <base-input
                :class="{ required: !fieldValidate.lastName.isValidate }"
                v-model="order.lastName"
                >Tên <span>*</span>
                <span
                  slot="tooltip"
                  class="tooltip tooltip--input"
                  v-if="!fieldValidate.lastName.isValidate"
                >
                  Dữ liệu không được để trống
                </span></base-input
              >
            </div>
          </div>
          <div class="input-row">
            <base-input v-model="order.companyName"
              >Tên công ty (optional)</base-input
            >
          </div>
          <div class="input-row">
            <div class="w-100">
              <label>Country / Region *</label>
              <select id="country" name="country" v-model="order.country">
                <option value="Afganistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bonaire">Bonaire</option>
                <option value="Bosnia & Herzegovina"
                  >Bosnia & Herzegovina</option
                >
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Ter"
                  >British Indian Ocean Ter</option
                >
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Canary Islands">Canary Islands</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic"
                  >Central African Republic</option
                >
                <option value="Chad">Chad</option>
                <option value="Channel Islands">Channel Islands</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Island">Cocos Island</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote DIvoire">Cote DIvoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curaco">Curacao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Ter">French Southern Ter</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Great Britain">Great Britain</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Indonesia">Indonesia</option>
                <option value="India">India</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea North">Korea North</option>
                <option value="Korea Sout">Korea South</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Malawi">Malawi</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Midway Islands">Midway Islands</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Nambia">Nambia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherland Antilles">Netherland Antilles</option>
                <option value="Netherlands"
                  >Netherlands (Holland, Europe)</option
                >
                <option value="Nevis">Nevis</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau Island">Palau Island</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Phillipines">Philippines</option>
                <option value="Pitcairn Island">Pitcairn Island</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Republic of Montenegro"
                  >Republic of Montenegro</option
                >
                <option value="Republic of Serbia">Republic of Serbia</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="St Barthelemy">St Barthelemy</option>
                <option value="St Eustatius">St Eustatius</option>
                <option value="St Helena">St Helena</option>
                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                <option value="St Lucia">St Lucia</option>
                <option value="St Maarten">St Maarten</option>
                <option value="St Pierre & Miquelon"
                  >St Pierre & Miquelon</option
                >
                <option value="St Vincent & Grenadines"
                  >St Vincent & Grenadines</option
                >
                <option value="Saipan">Saipan</option>
                <option value="Samoa">Samoa</option>
                <option value="Samoa American">Samoa American</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Tahiti">Tahiti</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Erimates"
                  >United Arab Emirates</option
                >
                <option value="United States of America"
                  >United States of America</option
                >
                <option value="Uraguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City State">Vatican City State</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam" selected>Vietnam</option>
                <option value="Virgin Islands (Brit)"
                  >Virgin Islands (Brit)</option
                >
                <option value="Virgin Islands (USA)"
                  >Virgin Islands (USA)</option
                >
                <option value="Wake Island">Wake Island</option>
                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                <option value="Yemen">Yemen</option>
                <option value="Zaire">Zaire</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
          </div>
          <div class="input-row">
            <div class="input-field">
              <base-input
                v-model="order.address"
                placeholder="Số nhà và tên đường"
                :class="{ required: !fieldValidate.address.isValidate }"
                >Địa chỉ <span>*</span
                ><span
                  slot="tooltip"
                  class="tooltip tooltip--input"
                  v-if="!fieldValidate.address.isValidate"
                >
                  Dữ liệu không được để trống
                </span></base-input
              >
            </div>
          </div>
          <div class="input-row">
            <base-input v-model="order.postOfficeCode"
              >Mã bưu điện (optional)</base-input
            >
          </div>
          <div class="input-row">
            <base-input
              :class="{ required: !fieldValidate.city.isValidate }"
              v-model="order.city"
              >Tỉnh / Thành phố <span>*</span
              ><span
                slot="tooltip"
                class="tooltip tooltip--input"
                v-if="!fieldValidate.city.isValidate"
              >
                Dữ liệu không được để trống
              </span></base-input
            >
          </div>
          <div class="input-row">
            <base-input
              type="number"
              v-model="order.phoneNumber"
              :class="{ required: !fieldValidate.phoneNumber.isValidate }"
              >Số điện thoại <span>*</span
              ><span
                slot="tooltip"
                class="tooltip tooltip--input"
                v-if="!fieldValidate.phoneNumber.isValidate"
              >
                Dữ liệu không được để trống
              </span></base-input
            >
          </div>
          <div class="input-row">
            <base-input
              type="email"
              v-model="order.email"
              :class="{ required: !fieldValidate.email.isValidate }"
              >Địa chỉ email <span>*</span
              ><span
                slot="tooltip"
                class="tooltip tooltip--input"
                v-if="!fieldValidate.email.isValidate"
              >
                Dữ liệu không được để trống
              </span></base-input
            >
          </div>
          <div class="additional">
            <div class="title">Thông tin bổ sung</div>
            <label>Ghi chú đơn hàng (optional)</label>
            <textarea
              v-model="order.note"
              placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
            ></textarea>
          </div>
        </div>
        <div class="col-md-5 order">
          <div class="title">
            Đơn hàng của bạn
          </div>
          <div class="row title--order">
            <div class="col-md-9">
              <div class="title">
                Sản phẩm
              </div>
            </div>
            <div class="col-md-3">
              <div class="title t-r">
                Tổng cộng
              </div>
            </div>
          </div>
          <div class="row content" v-for="item in cart" :key="item.productId">
            <div class="col-md-9">
              {{ item.productName }} <span>x {{ item.count }}</span>
            </div>
            <div class="col-md-3 t-r">
              {{ formatMoney(item.productPrice * item.count) }}<span>đ</span>
            </div>
          </div>
          <div class="row total">
            <div class="col-md-9">
              Tổng cộng
            </div>
            <div class="col-md-3 t-r">
              {{ formatMoney(amount) }} <span>đ</span>
            </div>
          </div>
          <div class="note">
            Trả tiền mặt khi nhận hàng (COD)
          </div>
          <button class="btn btn--add btn--red" @click="addOrder">
            ĐẶT HÀNG
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BaseInput from "../components/control/BaseInput.vue";
export default {
  components: { BaseInput },
  data() {
    return {
      cart: [],
      fieldValidate: {
        firstName: {
          isValidate: true,
          message: "Dữ liệu không được để trống"
        },
        lastName: {
          isValidate: true,
          message: "Dữ liệu không được để trống"
        },
        address: {
          isValidate: true,
          message: "Dữ liệu không được để trống"
        },
        city: {
          isValidate: true,
          message: "Dữ liệu không được để trống"
        },
        phoneNumber: {
          isValidate: true,
          message: "Dữ liệu không được để trống"
        },
        email: {
          isValidate: true,
          message: "Dữ liệu không được để trống"
        }
      },
      order: {
        accountId: 1,
        firstName: "",
        lastName: "",
        companyName: "",
        country: "Vietnam",
        address: "",
        postOfficeCode: "",
        city: "",
        phoneNumber: "",
        email: "",
        orderStatus: true,
        note: "",
        orderProducts: "",
        createdDate: ""
      }
    };
  },
  computed: {
    amount() {
      let amount = 0;
      this.cart.forEach(
        item => (amount += item.count * Number(item.productPrice))
      );
      return amount;
    },
    getCurrentDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      today = yyyy + "-" + mm + "-" + dd;
      return today;
    }
  },
  methods: {
    ...mapActions("orders", { addData: "addOrder" }),
    formatMoney(money) {
      return new Intl.NumberFormat().format(money);
    },
    getOrderProduct() {
      this.cart.forEach((item, index) => {
        if (index == 0) {
          this.order.orderProducts += item.productId;
        } else {
          for (let i = 0; i < item.count; i++) {
            this.order.orderProducts += "," + item.productId;
          }
        }
      });
    },
    validate() {
      let status = false;
      if (
        !this.order.firstName ||
        !this.order.lastName ||
        !this.order.address ||
        !this.order.city ||
        !this.order.phoneNumber ||
        !this.order.email
      ) {
        if (!this.order.firstName) {
          this.fieldValidate.firstName.isValidate = false;
        } else {
          this.fieldValidate.firstName.isValidate = true;
        }
        if (!this.order.lastName) {
          this.fieldValidate.lastName.isValidate = false;
        } else {
          this.fieldValidate.lastName.isValidate = true;
        }
        if (!this.order.city) {
          this.fieldValidate.city.isValidate = false;
        } else {
          this.fieldValidate.city.isValidate = true;
        }
        if (!this.order.address) {
          this.fieldValidate.address.isValidate = false;
        } else {
          this.fieldValidate.address.isValidate = true;
        }
        if (!this.order.phoneNumber) {
          this.fieldValidate.phoneNumber.isValidate = false;
        } else {
          this.fieldValidate.phoneNumber.isValidate = true;
        }
        if (!this.order.email) {
          this.fieldValidate.email.isValidate = false;
        } else {
          this.fieldValidate.email.isValidate = true;
        }
      } else {
        this.fieldValidate.firstName.isValidate = true;
        this.fieldValidate.lastName.isValidate = true;
        this.fieldValidate.address.isValidate = true;
        this.fieldValidate.city.isValidate = true;
        this.fieldValidate.phoneNumber.isValidate = true;
        this.fieldValidate.email.isValidate = true;
        status = true;
      }
      return status;
    },
    async addOrder() {
      if (this.validate()) {
        await this.addData(this.order);
        localStorage.removeItem("cart");
        this.$router.push({ name: "PayDetail" });
      }
    }
  },
  async mounted() {
    if (localStorage.getItem("cart")) {
      try {
        this.cart = JSON.parse(localStorage.getItem("cart"));
      } catch (error) {
        localStorage.removeItem("cart");
      }
    }
    this.order.createdDate = this.getCurrentDate;
    this.getOrderProduct();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";

.pay {
  padding: 40px 0;
  padding-bottom: 60px;
  .col-md-7 {
    padding-top: 40px;
    .title {
      margin-bottom: 25px;
    }
  }
  label {
    display: block;
    font-family: Barlow-Bold;
  }
  textarea {
    padding-top: 12px;
    padding-bottom: 12px;
    height: 100px;
  }
  .title {
    font-family: Barlow-Bold;
    font-size: 20px;
    text-transform: uppercase;
  }
  .input-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .input-field {
      width: 48%;
    }
  }
  .additional {
    margin-top: 20px;
  }
  .order {
    border: 2px solid $color-red;
    padding: 40px 30px;
    .title--order {
      margin-top: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid #ccc;
      .title {
        font-size: 14px;
      }
    }
    .content,
    .total {
      .col-md-3 {
        color: $color-red;
        font-family: Barlow-SBold;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span {
          text-decoration: underline;
        }
      }
      .col-md-9 {
        span {
          font-family: Barlow-Bold;
          color: $color-red;
          opacity: 0.8;
        }
      }
    }
    .content {
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
    }
    .total {
      padding-top: 5px;
      padding-bottom: 5px;
      border-bottom: 1px solid #ccc;
      .col-md-9 {
        font-family: Barlow-Bold;
      }
    }
    .note {
      font-family: Barlow-Bold;
      padding: 20px 0;
    }
  }
}
</style>
