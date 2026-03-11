'use client'

import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import DateReserve from '@/components/DateReserve'

export default function BookingPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Venue Booking</h1>
      <form>
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
        />
        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
        />
        <FormControl variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select id="venue" labelId="venue-label">
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
        <DateReserve />
        <button name="Book Venue">Book Venue</button>
      </form>
    </main>
  )
}
