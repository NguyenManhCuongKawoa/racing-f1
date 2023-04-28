import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const ModalPoint = () => {

    useEffect(() => {
        
    }, [])


  return (
    
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Thêm chặng đua</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
                <div className="">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Tên chặng đua</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Nhập tên chặng đua" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Mô tả</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Nhập mô tả" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Ngày bắt đầu</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Nhập ngày bắt đầu" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Ngày kết thúc</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Nhập ngày kết thúc" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <select class="custom-select">
                        <option selected>Chọn Mùa giải</option>
                        <option value="1">2023</option>
                        <option value="2">2022</option>
                        <option value="3">2021</option>
                        <option value="3">2020</option>
                        <option value="3">2019</option>
                    </select>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" >Lưu</button>
                </div>
            </div>
        </div>
    </div>
  )
}
