"use client";
import { authClient } from '@/lib/auth-client';
import { Avatar, Card, Input, Button } from '@heroui/react';
import React, { useState } from 'react';
import { Camera, User, Mail, Save, ShieldCheck, Truck, RotateCcw, CreditCard } from 'lucide-react';

const MyProfilePage = () => {
    const session = authClient.useSession();
    const user = session?.data?.user;

    const [name, setName] = useState(user?.name || "");
    const [image, setImage] = useState(user?.image || "");
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = async () => {
        setIsUpdating(true);
        try {
            await authClient.updateUser({ name, image });
            alert("Profile updated successfully!");
        } catch (error) {
            alert("Failed to update profile.");
        } finally {
            setIsUpdating(false);
        }
    };

    const policies = [
        {
            title: "Secure Payments",
            desc: "Every transaction is encrypted and secured by top-tier providers.",
            icon: <ShieldCheck className="text-blue-500" size={24} />,
        },
        {
            title: "Fast Delivery",
            desc: "Standard shipping takes 3-5 business days nationwide.",
            icon: <Truck className="text-purple-500" size={24} />,
        },
        {
            title: "Return Policy",
            desc: "7-day easy return policy if the product is not as described.",
            icon: <RotateCcw className="text-pink-500" size={24} />,
        },
        {
            title: "Multiple Methods",
            desc: "We support Credit Cards, Digital Wallets, and Net Banking.",
            icon: <CreditCard className="text-orange-500" size={24} />,
        }
    ];

    if (!user) return <div className="text-center py-20 font-medium">Loading session...</div>;

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Profile Edit Card */}
                <div className="lg:col-span-5">
                    <Card className="p-8 shadow-2xl border-none bg-white dark:bg-zinc-900 overflow-visible">
                        <div className="flex flex-col items-center space-y-6">
                            <div className="relative group">
                                <Avatar className="w-28 h-28 text-large ring-4 ring-offset-4 ring-blue-500/20">
                                    <Avatar.Image src={image || user?.image} alt={name} />
                                    <Avatar.Fallback className="bg-zinc-100 dark:bg-zinc-800 text-xl font-bold">
                                        {name?.charAt(0) || "U"}
                                    </Avatar.Fallback>
                                </Avatar>
                                <div className="absolute -bottom-1 -right-1 bg-blue-600 p-2 rounded-full text-white shadow-lg cursor-pointer hover:bg-blue-700 transition-colors">
                                    <Camera size={16} />
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="text-2xl font-bold tracking-tight">Account Settings</h2>
                                <p className="text-sm text-zinc-500">Manage your profile details</p>
                            </div>

                            <div className="w-full space-y-4 pt-4">
                                <Input label="Full Name" variant="flat" value={name} onChange={(e) => setName(e.target.value)} startContent={<User size={18} className="text-zinc-400" />} />
                                <Input label="Avatar URL" variant="flat" value={image} onChange={(e) => setImage(e.target.value)} startContent={<Camera size={18} className="text-zinc-400" />} />
                                <Input label="Email" variant="flat" value={user?.email} isDisabled startContent={<Mail size={18} className="text-zinc-400" />} />
                            </div>

                            <Button color="primary" className="w-full h-12 font-bold text-md" onPress={handleUpdate} isLoading={isUpdating} startContent={!isUpdating && <Save size={18} />}>
                                Update Profile
                            </Button>
                        </div>
                    </Card>
                </div>

                {/* Right Side: Business Policy Cards */}
                <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 ml-1">Our Business Policy</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {policies.map((policy, index) => (
                            <Card key={index} className="p-6 border-none shadow-sm hover:shadow-md transition-shadow bg-zinc-50/50 dark:bg-zinc-800/50">
                                <div className="space-y-3">
                                    <div className="p-3 bg-white dark:bg-zinc-900 w-fit rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700">
                                        {policy.icon}
                                    </div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white">{policy.title}</h4>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{policy.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Additional Policy Note */}
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                        <p className="text-xs text-blue-700 dark:text-blue-400 text-center">
                            By using our services, you agree to our Terms of Conditions and Privacy Policy. 
                            All user data is handled according to GDPR standards.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfilePage;