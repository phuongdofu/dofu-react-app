// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { Box, TextField, Link, FormControl, Select, MenuItem, Stack } from '@mui/material';


export default function Sequence() {
  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ pl: 3 }}>Sequence</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Duration</TableCell>
              <TableCell align="center">Instruntion</TableCell>
              <TableCell align="center" sx={{ pr: 3 }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow hover>
                <TableCell align="center" sx={{ pl: 3 }} component="th" scope="row">
                    #1
                </TableCell>
                <TableCell align="center">
                    <TextField fullWidth variant="standard" />
                </TableCell>
                <TableCell align="center">
                    <TextField fullWidth variant="standard" />
                </TableCell>
                <TableCell align="center">
                    <TextField fullWidth variant="standard" />
                </TableCell>
                <TableCell align="center">
                    <Link href="#" underline="none">Details</Link>
                </TableCell>
                <TableCell sx={{ pr: 3 }} align="center">
                    <Stack direction="row">
                        <TextField variant="standard" />
                        <FormControl>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value label>
                                <MenuItem value="day">days</MenuItem>
                                <MenuItem value="week">weeks</MenuItem>
                                <MenuItem value="month">months</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
