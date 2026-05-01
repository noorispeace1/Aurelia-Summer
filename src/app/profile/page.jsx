"use client";
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const MyProfilePage = () => {
      const userData = authClient.useSession();
      const user = userData?.data?.user;
    return (
        <div>
                   <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                  
       
                </div>
            <Card className='max-w-96 mx-auto flex flex-col items-center'>
                    <Avatar><Avatar.Image src={user?.image} alt={user?.name} />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback></Avatar>
                              
            </Card>
                 
     
                        
        </div>
    );
};

export default MyProfilePage;