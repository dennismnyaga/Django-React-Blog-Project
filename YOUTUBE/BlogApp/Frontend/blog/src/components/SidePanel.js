import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockIcon from '@mui/icons-material/Lock';
import VpnLockIcon from '@mui/icons-material/VpnLock';

const SidePanel = () => {
  return (
    <div className='shadow-lg'>
        <div className='text-center py-5'>
            <h4 className='font-bold'>Over 12,000 Reader visit our blog per day</h4>
            <div className='flex gap-2 flex-wrap justify-evenly mt-3'>
                <div className='cursor-pointer'>
                    <EditNoteIcon />
                    <p>Start Wring</p>
                </div>
                <div className='cursor-pointer'>
                    <ShoppingCartIcon />
                    <p>Create an ecomerce site</p>
                </div>
                <div className='cursor-pointer'>
                    <LockIcon />
                    <p>Cyber Security Course</p>
                </div>
                <div className='cursor-pointer'>
                    <VpnLockIcon />
                    <p>Cyber Security Course</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SidePanel