import * as React from "react"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import MatSlider from "@mui/material/Slider"

export default function Slider() {
  const [value, setValue] = React.useState(30)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <MatSlider aria-label="Score" value={value} onChange={handleChange} valueLabelDisplay="auto"/>
      </Stack>
    </Box>
  )
}
