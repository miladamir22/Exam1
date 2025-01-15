import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const TopBox = () => {
  return (
    <div className='topbox'>
        <p>We believe we helps people
        for happier lives</p>
        <div>
            <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="loqo" />
        </div>
        <div style={{display: "flex", alignItems: "center",gap: '5px', padding: "6px"
}}>
        
        <p>+880 123 12 658 439</p>
        <div className='phone'><LocalPhoneIcon/></div>

        </div>
    </div>
  )
}
