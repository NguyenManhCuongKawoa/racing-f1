import React from 'react'

function RacingDetail() {
  return (
    <div className = "container mt-4 ">
      <div className="text-uppercase font-weight-bold mb-1">Thông tin cơ bản chặng đua</div>
      <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">Tên chặng đua: <span className="font-weight-light">Chặng đua f1</span></li>
          <li className="list-group-item d-flex justify-content-between">Mô tả: <span className="font-weight-light">Chặng đua f1 trên toàn thế giới</span> </li>
          <li className="list-group-item d-flex justify-content-between">Thời gian bắt đầu: <span className="font-weight-light">22/10/2023</span></li>
          <li className="list-group-item d-flex justify-content-between">Thời gian kết thúc: <span className="font-weight-light">01/11/2023</span></li>
          <li className="list-group-item d-flex justify-content-between">Mùa giải: <span className="font-weight-light">2023</span></li>
      </ul>

      <div className="text-uppercase font-weight-bold mb-1">Danh sách tay đua</div>
      <div className="">
      <table className="table table-sm table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên tay đua</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Điểm</th>
                        <th scope="col">Đội đua</th>
                    </tr>
                </thead>
                <tbody>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                      <th scope="row">1</th>
                      <td>CuongNM</td>
                      <td>22</td>
                      <td>0978481376</td>
                      <td>cuongnm@pellcop.com</td>
                      <td>9999</td>
                      <td>PELLCOP</td>
                    </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">2</th>
                    <td>Nguyen Văn A</td>
                    <td>23</td>
                    <td>0978481999</td>
                    <td>nguyenvana@pellcop.com</td>
                    <td>8888</td>
                    <td>TuoiTre</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">3</th>
                    <td>Nguyen Văn B</td>
                    <td>22</td>
                    <td>0978481888</td>
                    <td>nguyenvanb@pellcop.com</td>
                    <td>8123</td>
                    <td>PELLCOP</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">4</th>
                    <td>Nguyen Văn C</td>
                    <td>25</td>
                    <td>0978481222</td>
                    <td>nguyenvanc@pellcop.com</td>
                    <td>6123</td>
                    <td>TuoiTre</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">4</th>
                    <td>Nguyen Văn D</td>
                    <td>22</td>
                    <td>0978481376</td>
                    <td>nguyenvand@pellcop.com</td>
                    <td>6000</td>
                    <td>CarCupper</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">5</th>
                    <td>Nguyen Văn E</td>
                    <td>22</td>
                    <td>0978481376</td>
                    <td>nguyenvane@pellcop.com</td>
                    <td>5432</td>
                    <td>PELLCOP</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">5</th>
                    <td>Nguyen Văn F</td>
                    <td>22</td>
                    <td>0978481376</td>
                    <td>nguyenvanf@pellcop.com</td>
                    <td>4444</td>
                    <td>Conan</td>
                  </tr>
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default RacingDetail