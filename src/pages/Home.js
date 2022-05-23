import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import isMacAddress from "validator/lib/isMACAddress";
import { DataGrid } from "@mui/x-data-grid";
import BasicModal from "../components/Modal";

export default function Home() {
  const [inputData, setInputData] = useState({
    id: "",
    macAddress: "",
  });

  const [errorData, setErrorData] = useState({
    errorMessage: "",
    errorBoolean: false,
  });

  const [ButtonActive, setButtonActive] = useState({
    disabled: true,
  });

  const [data, setData] = useState([
    { id: 1, address: "D4:4D:24:4B:B6:F0" },
    { id: 2, address: "D4:4D:24:4B:B6:F0" },
  ]);

  const [input, setInput] = useState("");

  const submitFormData = (e) => {
    e.preventDefault();
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    const isValid = isMacAddress(value, {
      no_separators: false,
    });

    console.log(isValid);

    if (isValid) {
      setErrorData({
        errorBoolean: false,
      });
      setButtonActive({
        disabled: false,
      });
    } else {
      setErrorData({
        errorMessage: "mac address is invalid",
        errorBoolean: true,
      });
      setButtonActive({
        disabled: true,
      });
    }

    setInputData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // const validateInputData = () => {
  //   const result = isMacAddress(inputData.macAddress, { no_separators: false });
  //   console.log(result);
  //   return result;
  // };

  // let idCounter = 2;

  // const createRow = (inputData) => {
  //   idCounter += 1;
  //   return {
  //     id: idCounter,
  //     address: inputData.macAddress,
  //   };
  // };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "address",
      headerName: "MAC-address",
      width: 150,
    },
    {
      field: "info",
      headerName: "info",
      width: 90,
      renderCell: () => {
        return <Typography>vendor info</Typography>;
      },
    },
    {
      field: "button",
      headerName: "button",
      width: 90,
      renderCell: () => {
        return <Button variant="contained">test</Button>;
      },
    },
  ];

  // const rows = [
  //   { id: 1, address: inputData.macAddress },
  //   { id: 2, address: "D4:4D:24:4B:B6:F0" },
  // ];

  return (
    <div className="mainContainer">
      <div className="content">
        <Box>
          <TextField
            type="text"
            name="macAddress"
            placeholder="00:00:00:00:00:00"
            helperText={errorData.errorMessage}
            value={input}
            error={errorData.errorBoolean}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            // disabled={ButtonActive.disabled}
            onClick={() => {
              setData((prev) => [
                ...prev,
                { id: data.length + 1, address: input },
              ]);
            }}
          >
            Submit
          </Button>
        </Box>
        <Box sx={{ height: 400, width: "50%" }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
        <Box>
          <BasicModal></BasicModal>
        </Box>
      </div>
    </div>
  );
}
