import { Box, Grid } from "@mui/material";
// import AutocompleteCustomer from "components/AutocompleteCustomer/index";
import Loading from "components/Loading/index";
import MainCard from "components/MainCard";
import toastifyAlert from "components/SnackBar/toastifyAlert";
import DataTable from "components/TableCustom";
import ComponentSkeleton from "pages/components-overview/ComponentSkeleton";
import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import TaskForm from "./TaskForm";
// 1: rows = Danh sách data
// 2: checkBoxTable = checkBoxTable

function listview(props) {

  const dataLogin = useSelector((state) => state.loginReducer);
  console.log({ dataLogin });

  let [open, setOpen] = useState(false);
  const a = 3;

  const columns = [
    { field: "id", headerName: "ID", width: 40, alignCenter: "center" },
    { field: "mSV", headerName: "MSV", width: 130 },
    { field: "name", headerName: "Họ Và Tên", width: 200 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "sex", headerName: "Giới Tính", width: 80 },
    { field: "age", headerName: "Tuổi", type: "string", headerAlign: "center" },
    { field: "address", headerName: "Quê Quán", width: 200 },
    { field: "interests", headerName: "Sở Thích", width: 130 },
    { field: "date", headerName: "Ngày Sinh", width: 130 },
  ];

  const rows = [
    {
      id: 1,
      mSV: 1855010158,
      email: "nttung.code@gmail.com",
      name: "Nguyễn Tiến Tùng",
      sex: "Nam",
      age: 20,
      address: "Thanh Oai-Hà Nội",
      interests: "Chụp Ảnh",
      date: "07/03/2000"
    },
    {
      id: 2,
      mSV: 1855010158,
      email: "nttung.code@gmail.com",
      name: "Nguyễn Tiến Tùng",
      sex: "Nam",
      age: 20,
      address: "Thanh Oai-Hà Nội",
      interests: "Chụp Ảnh",
      date: "07/03/2000"
    },
    {
      id: 3,
      mSV: 1855010158,
      email: "nttung.code@gmail.com",
      name: "Nguyễn Tiến Tùng",
      sex: "Nam",
      age: 20,
      address: "Thanh Oai-Hà Nội",
      interests: "Chụp Ảnh",
      date: "07/03/2000"
    },
    {
      id: 4,
      mSV: 1855010158,
      email: "nttung.code@gmail.com",
      name: "Nguyễn Tiến Tùng",
      sex: "Nam",
      age: 20,
      address: "Thanh Oai-Hà Nội",
      interests: "Chụp Ảnh",
      date: "07/03/2000"
    },
    {
      id: 5,
      mSV: 1855010158,
      email: "nttung.code@gmail.com",
      name: "Nguyễn Tiến Tùng",
      sex: "Nam",
      age: 20,
      address: "Thanh Oai-Hà Nội",
      interests: "Chụp Ảnh",
      date: "07/03/2000"
    },
  ];
  const getObjStudent = (msv) => {
    var objStudent = {
      id: 1,
      mSV: msv,
      email: "nttung.code@gmail.com",
      name: "Nguyễn Tiến Tùng",
      sex: "Nam",
      age: 20,
      address: "Thanh Oai-Hà Nội",
      interests: "Chụp Ảnh",
      date: "07/03/2000"
    }
    this.rows.push(objStudent);
    setOpen(false);
  }
  const first = (second) => {
    console.log({ second });
    setOpen(true);
    toastifyAlert.success("Success");
  };

  const onClickAdd = useCallback((isClick) => {
    console.log(isClick);
    setOpen(true);
  }, []);

  return (
    <>
      {a === 2 ? (
        <Box sx={{ display: "flex" }}>
          <Loading />
        </Box>
      ) : (
        <ComponentSkeleton >
          <MainCard
            title="Danh Sách Sinh Viên"
            onAdd={true}
            // addDisabled={true}
            onClickAdd={onClickAdd}
            titleAdd="Thêm mới"
          >

            <Grid item xs={2} md={7} lg={8} >
              <DataTable
                rows={rows}
                columns={columns}
                checkBoxTable={false}
                onEdit={first}
                onDelete={first}
              />
            </Grid>
            <Grid container>
              {/* <Grid item xs={4}>
                <AutocompleteCustomer
                  options={rows}
                  textLabel="Sở Thích"
                  error={false}
                  helperText=""
                  optionLabel="interests"
                  onChange={(e) => console.log(e)}
                />
              </Grid> */}
              {/*//Gọi nhập tên*/}
              {/* <Grid item xs={4}>
                <CustomTextField clearText onChange={(e) => console.log(e)} />
              </Grid> */}
              {/*//Gọi ngày sinh*/}
              {/* <Grid item xs={4}>
                <CustomDatePicker />
              </Grid> */}
            </Grid>
          </MainCard>
        </ComponentSkeleton>
      )}
      {/* <ConfirmDialog isOpen={open} setIsOpen={setOpen} /> */}
      <TaskForm
        open={open}
        title="Thêm Dữ Liệu Mới"
        onClose={() => setOpen(false)}
        onSave= {
          getObjStudent
        }
      />
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

listview.propTypes = {};

export default memo(listview);
