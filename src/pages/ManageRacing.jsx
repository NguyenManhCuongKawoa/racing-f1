import React, { useState } from 'react'
import { ModalPoint } from '../components/ModalPoint'

function ManageRacing() {

  const [svClicked, setSvClicked] = useState()

  return (
    <div className="container">
      <div className="text-uppercase font-weight-bold mb-1 mt-4">Danh sách sinh viên</div>
        <div className="">
            <table className="table table-sm table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên Chặng đua</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Ngày bắt đầu</th>
                        <th scope="col">Ngày kết thúc</th>
                        <th scope="col">Mùa giải</th>
                    </tr>
                </thead>
                <tbody>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                      <th scope="row">1</th>
                      <td>Chặng đua chung kết</td>
                      <td>Chặng đua chung kết hàng đầu Việt Nam</td>
                      <td>24/12/2023</td>
                      <td>28/12/2023</td>
                      <td>2023</td>
                    </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">2</th>
                    <td>Chặng đua tốc độ</td>
                    <td>Chặng đua tốc độ hàng đầu Việt Nam</td>
                    <td>22/11/2023</td>
                    <td>22/12/2023</td>
                    <td>2023</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">3</th>
                    <td>Chặng đua f1</td>
                    <td>Chặng đua f1 trên toàn thế giới</td>
                    <td>22/10/2023</td>
                    <td>01/11/2023</td>
                    <td>2023</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">4</th>
                    <td>Chặng đua f1 2022</td>
                    <td>Chặng đua f1 2022</td>
                    <td>22/10/2022</td>
                    <td>01/11/2022</td>
                    <td>2022</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">4</th>
                    <td>Chặng đua f1 2021</td>
                    <td>Chặng đua f1 2021</td>
                    <td>22/10/2021</td>
                    <td>01/11/2021</td>
                    <td>2021</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">5</th>
                    <td>Chặng đua f1 2020</td>
                    <td>Chặng đua f1 2020</td>
                    <td>22/10/2020</td>
                    <td>01/11/2020</td>
                    <td>2020</td>
                  </tr>
                  <tr data-toggle="modal" data-target="#exampleModalLong" style={{cursor: "pointer"}} >
                    <th scope="row">5</th>
                    <td>Chặng đua hàng đầu</td>
                    <td>Chặng đua hàng đầu</td>
                    <td>07/04/2020</td>
                    <td>07/05/2020</td>
                    <td>2020</td>
                  </tr>
                </tbody>
            </table>
        </div>
        <ModalPoint />
    </div>
  )
}

export default ManageRacing