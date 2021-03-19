<template>
  <div class="container about">
    <h1 class="title">Giới thiệu về ManhNhatComputer</h1>
    <div>
      <p>
        <b>Công ty cổ phần Mạnh Nhất Comuter *</b> là một trong những doanh nghiệp tiên
        phong trong lĩnh vực Công nghệ thông tin tại Hà Nội.
      </p>
      <p>
        Với tầm nhìn dài hạn, ManhNhatComputer tập trung đầu tư vào lĩnh vực
        Công nghệ thông tin. Trên tinh thần phát triển bền vững và chuyên
        nghiệp, ManhNhatComputer được cơ cấu với các sản phẩm kinh doanh chính
        gồm:
      </p>
      <div class="list">
        <ul class="list">
          <li>Laptop & Phụ kiện</li>
          <li>Máy tính văn phòng</li>
          <li>Máy tính chơi Game</li>
          <li>Máy chủ, Máy trạm</li>
          <li>Linh kiện máy tính</li>
          <li>Monitor – Màn hình</li>
          <li>Gaming Gear & Console</li>
          <li>Thiết bị văn phòng</li>
          <li>Thiết bị Nghe Nhìn Giải Trí</li>
          <li>Thiết bị Siêu thị, Cửa hàng</li>
          <li>Thiết bị Hội Nghị, Trường Học</li>
          <li>Thiết bị Lưu trữ</li>
          <li>Thiết bị Mạng, Phần mềm</li>
          <li>Phụ kiện các loại</li>
        </ul>
      </div>
    </div>
    <div class="title block1">
      2. Giá trị cốt lõi
    </div>
    <div>
      Văn hóa ManhNhatComputer được thể hiện qua bốn giá trị cốt lõi:
      <span style="color: #000080; font-weight: 900; font-family: Barlow-Bold"
        >TẬN TÂM – TRÁCH NHIỆM – SÁNG TẠO – KHÁC BIỆT</span
      >
    </div>
    <div class="row block2">
      <div class="col-md-6">
        <div class="c1">
          <img src="../assets/images/about1.jpg" alt="" />
          <div><span>Tận tâm</span></div>
          <div><i>“Vượt trên sự mong đợi”</i></div>
          <p>
            ManhNhatComputer đặt tận tâm là nền tảng của phục vụ, lấy khách hàng
            làm trung tâm, mang đến những giá trị đích thực tới khách hàng và
            đối tác.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="c2">
          <img src="../assets/images/about2.jpg" alt="" />
          <div><span>trách nhiệm</span></div>
          <div><i>“Chúng ta luôn cố gắng”</i></div>
          <p>
            ManhNhatComputer đặt chữ TÍN lên hàng đầu, luôn thể hiện tinh thần
            trách nhiệm cao cùng phương châm “Làm hết việc chứ không làm hết
            giờ”.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="c3">
          <img src="../assets/images/about3.jpg" alt="" />
          <div><span>KHÁC BIỆT</span></div>
          <i>“Dám nghĩ – Dám làm”</i>
          <p>
            ManhNhatComputer đặt sự khác biệt là chủ trương để xây dựng công ty
            thành một doanh nghiệp dẫn đầu.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="c4">
          <img src="../assets/images/about4.jpg" alt="" />
          <div><span>SÁNG TẠO</span></div>
          <i>"“Không gì là không thể”</i>
          <p>
            ManhNhatComputer coi sáng tạo là đòn bẩy để phát triển, luôn đề cao các
            sáng kiến để hoàn thiện, hiệu quả hơn, nâng tầm giá trị.
          </p>
        </div>
      </div>
    </div>
    <div class="title block3">
      3. Sơ đồ tổ chức
      <img width="100%" src="../assets/images/sdtc.jpg" alt="" />
    </div>
    <div class="title block4">
      4.Những thành tựu đã đạt được
      <img width="100%" src="../assets/images/tt.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/abstracts/variable.scss";
.about {
  .title {
    color: $color-black;
    font-family: Barlow-Bold;
    font-size: 24px;
    margin-bottom: 20px;
  }
  h1.title {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: 36px;
    text-transform: uppercase;
  }
  .list {
    margin-left: 30px;
    margin-bottom: 40px;
    li {
      &::before {
        content: "\f0da";
        font-family: "Font Awesome 5 Pro";
        font-weight: 900;
        margin-right: 5px;
      }
    }
  }
  .block2 {
    margin-bottom: 30px;
    .c1,
    .c2,
    .c3,
    .c4 {
      margin-top: 30px;
      padding: 40px 0;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      color: #fff;
      img {
        display: block;
        width: 150px;
        height: 150px;
        text-align: center;
        margin: 0 auto;
        border-radius: 50%;
      }
      span {
        font-size: 30px;
        text-transform: uppercase;
        font-weight: 900;
        padding: 10px 0 30px 0;
        display: block;
      }
      i {
        font-weight: 900;
        font-size: 18px;
        margin-bottom: 20px;
        display: block;
      }
    }
    .c1 {
      background-color: #fa8c11;
    }
    .c2 {
      background-color: #ec1922;
    }
    .c3 {
      background-color: #26a9e1;
    }
    .c4 {
      background-color: #242156;
    }
  }
  .block4 {
    margin-bottom: 100px;
  }
}
</style>
