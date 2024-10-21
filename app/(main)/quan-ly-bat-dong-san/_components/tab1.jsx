'use client';

import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';

import { BatDongSanService } from 'demo/service/BatDongSanService';
import { useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';

function BatDongSanForm({ formData, setVisible, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  return (
    <form
      onSubmit={handleSubmit(data => {
        onSubmit(data);
        setVisible(false);
      })}
    >
      <div className="flex flex-column gap-2">
        <div className="flex gap-2">
          <div className="flex flex-column gap-2 flex-1">
            <label className="font-semibold">Số đăng ký</label>
            <InputText
              prefix="PCKBC-"
              className={`${errors.so_dang_ky ? 'p-invalid' : ''}`}
              {...register('so_dang_ky', { required: true })}
            />
            {errors.so_dang_ky && <span className="text-red-600">Bắt buộc</span>}
          </div>
          <div className="flex flex-column gap-2 flex-1">
            <label className="font-semibold">Thành tiền</label>
            <InputText
              className={`${errors.thanh_tien ? 'p-invalid' : ''}`}
              {...register('thanh_tien', { required: true })}
            />
            {errors.thanh_tien && <span className="text-red-600">Bắt buộc</span>}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-column gap-2 flex-1">
            <label className="font-semibold">Số nhà</label>
            <InputText className={`${errors.so_nha ? 'p-invalid' : ''}`} {...register('so_nha', { required: true })} />
            {errors.so_nha && <span className="text-red-600">Bắt buộc</span>}
          </div>
          <div className="flex flex-column gap-2 flex-1">
            <label className="font-semibold">Tên đường</label>
            <InputText
              className={`${errors.ten_duong ? 'p-invalid' : ''}`}
              {...register('ten_duong', { required: true })}
            />
            {errors.ten_duong && <span className="text-red-600">Bắt buộc</span>}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-column gap-2 flex-1">
            <label className="font-semibold">Xã/Phường</label>
            <InputText
              className={`${errors.xa_phuong ? 'p-invalid' : ''}`}
              {...register('xa_phuong', { required: true })}
            />
            {errors.xa_phuong && <span className="text-red-600">Bắt buộc</span>}
          </div>
          <div className="flex flex-column gap-2 flex-1">
            <label className="font-semibold">Quận/Huyện</label>
            <InputText
              className={`${errors.quan_huyen ? 'p-invalid' : ''}`}
              {...register('quan_huyen', { required: true })}
            />
            {errors.quan_huyen && <span className="text-red-600">Bắt buộc</span>}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-column gap-2 flex-1">
            <label className="font-semibold">Loại BĐS</label>
            <Dropdown
              // value={selectedCity}
              // onChange={e => setSelectedCity(e.value)}
              options={['Căn hộ chung cư', 'Nhà  phố 2 tầng', 'Nhà phố 3 tầng']}
              // optionLabel="name"
              placeholder="Select a City"
              className={`${errors.loai_bds ? 'p-invalid' : ''}`}
              {...register('loai_bds', { required: true })}
            />
            {errors.loai_bds && <span className="text-red-600">Bắt buộc</span>}
          </div>
          <div className="flex flex-column gap-2 flex-1">
            <label className="font-semibold">Nhân viên QL</label>
            <InputText
              className={`${errors.nhan_vien_ql ? 'p-invalid' : ''}`}
              {...register('nhan_vien_ql', { required: true })}
            />
            {errors.nhan_vien_ql && <span className="text-red-600">Bắt buộc</span>}
          </div>
        </div>
      </div>
      <div className="flex justify-content-end mt-4">
        <Button label="Hủy" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
        <Button type="submit" label="Lưu" icon="pi pi-check" />
      </div>
    </form>
  );
}

export default function Tab1() {
  const [customers, setCustomers] = useState([]);

  const [filters, setFilters] = useState({
    global: { value: '', matchMode: FilterMatchMode.CONTAINS },
    // name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // 'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // representative: { value: null, matchMode: FilterMatchMode.IN },
    // status: { value: null, matchMode: FilterMatchMode.EQUALS },
    // verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const [loading, setLoading] = useState(true);

  const [visible, setVisible] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const onGlobalFilterChange = e => {
    const { value } = e.target;
    const _filters = { ...filters };

    _filters.global.value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => (
    <div className="flex justify-content-end gap-3">
      <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Tìm kiếm" />
      <Button label="Thêm mới" icon="pi pi-plus" onClick={() => setVisible(true)} />
    </div>
  );

  useEffect(() => {
    BatDongSanService.getBatDongSan().then(data => {
      setCustomers(data);
      setLoading(false);
    });
  }, []);

  const header = renderHeader();

  const actionBodyTemplate = rowData => (
    <Button
      icon="pi pi-pencil"
      rounded
      severity="info"
      onClick={() => {
        setSelectedCustomer(rowData);
        setVisible(true);
      }}
    />
  );

  const footerContent = (
    <div>
      <Button label="Hủy" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
      <Button label="Lưu" icon="pi pi-check" onClick={() => setVisible(false)} />
    </div>
  );

  return (
    <div className="m-0">
      <DataTable
        value={customers}
        paginator
        rows={10}
        dataKey="so_dang_ky"
        filters={filters}
        // filterDisplay="row"
        loading={loading}
        globalFilterFields={[
          'so_dang_ky',
          'thanh_tien',
          'so_nha',
          'ten_duong',
          'xa_phuong',
          'quan_huyen',
          'loai_bds',
          'trang_thai',
          'nhan_vien_ql.ho_va_ten',
        ]}
        header={header}
        emptyMessage="Không có bất động sản được tìm thấy."
      >
        <Column field="so_dang_ky" header="Số đăng ký"></Column>
        <Column field="thanh_tien" header="Giá"></Column>
        <Column field="so_nha" header="Số nhà"></Column>
        <Column field="ten_duong" header="Tên đường"></Column>
        <Column field="xa_phuong" header="Xã/Phường"></Column>
        <Column field="quan_huyen" header="Quận/Huyện"></Column>
        <Column field="loai_bds" header="Loại BĐS"></Column>
        <Column field="trang_thai" header="Trạng thái"></Column>
        <Column field="nhan_vien_ql.ho_va_ten" header="Nhân viên QL"></Column>
        <Column body={actionBodyTemplate}></Column>
      </DataTable>

      <Dialog
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => {
          if (!visible) return;
          setSelectedCustomer(null);
          setVisible(false);
        }}
        // footer={footerContent}
        draggable={false}
        showHeader={false}
        keepInViewport={false}
      >
        <div className="mt-4">
          <BatDongSanForm
            formData={selectedCustomer || {}}
            setVisible={setVisible}
            onSubmit={data => {
              if (selectedCustomer) {
                setCustomers(prev => prev.map(c => (c.so_dang_ky === data.so_dang_ky ? data : c)));
                return;
              }
              setCustomers(prev => [data, ...prev]);
            }}
          />
        </div>
      </Dialog>
    </div>
  );
}
