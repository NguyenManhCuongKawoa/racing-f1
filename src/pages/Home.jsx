import React from 'react'

export const Home = () => {
  return (
    <div className='container mt-4'>
      <div class="row">
        <div class="px-2" style={{width: "60%"}}>
          <h2>Bảng xếp hạng tay đua</h2>
          <div className="mt-2">
            Mùa giải: 
            <select class="custom-select">
              <option selected>Chọn Mùa giải</option>
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
              <option value="3">2020</option>
              <option value="3">2019</option>
            </select>
          </div>
          
          <div className="mt-2">
            Danh sách tay đua:
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
        <div class="px-2" style={{width: "40%"}}>
          <h2>Bảng xếp hạng đội đua</h2>
          <div className="mt-2">
            Mùa giải: 
            <select class="custom-select">
              <option selected>Chọn Mùa giải</option>
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
              <option value="3">2020</option>
              <option value="3">2019</option>
            </select>
          </div>
          
          <div className="mt-2">
            Danh sách tay đua:
            <table className="table table-sm table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên đội đua</th>  
                        <th scope="col">Điểm</th>
                    </tr>
                </thead>
                <tbody>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">1</th>
                    <td>PELLCOP</td>
                    <td>200</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">2</th>
                    <td>TuoiTre</td>
                    <td>188</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">3</th>
                    <td>CarCupper</td>
                    <td>177</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">4</th>
                    <td>Conan</td>
                    <td>152</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}
