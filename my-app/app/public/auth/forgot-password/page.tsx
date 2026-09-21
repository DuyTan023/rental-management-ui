"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
    const searchParams = useSearchParams();

    const [step, setStep] = useState(1);

    const [email, setEmail] = useState(
        searchParams.get("email") ?? ""
    );

    const [otp, setOtp] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleOtpChange = (
        index: number,
        value: string
    ) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        // Tự động chuyển sang ô tiếp theo
        if (value && index < 5) {
            document
                .getElementById(`otp-${index + 1}`)
                ?.focus();
        }
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-white">

            {/* Background decoration */}
            <div className="absolute -left-[180px] -top-[220px] h-[650px] w-[650px] rounded-full bg-blue-500" />

            <div className="absolute -bottom-[300px] -right-[200px] h-[650px] w-[650px] rounded-full bg-blue-500" />


            {/* Card */}
            <div className="relative flex min-h-screen items-center justify-center px-4">

                <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl">

                    {/* Header */}
                    <div className="mb-8 text-center">

                        <h1 className="text-2xl font-bold text-gray-900">
                            {step === 1 && "QUÊN MẬT KHẨU?"}
                            {step === 2 && "XÁC THỰC OTP"}
                            {step === 3 && "MẬT KHẨU MỚI"}
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            {step === 1 &&
                                "Nhập email để nhận mã xác thực"}

                            {step === 2 &&
                                "Nhập mã OTP đã được gửi đến email của bạn"}

                            {step === 3 &&
                                "Tạo mật khẩu mới cho tài khoản của bạn"}
                        </p>

                    </div>


                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="space-y-5">

                            <div className="space-y-2">

                                <Label htmlFor="email">
                                    Email
                                </Label>

                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Nhập email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    className="border-gray-300 focus-visible:border-blue-500 focus-visible:ring-blue-100"
                                />

                            </div>


                            <Button
                                type="button"
                                className="w-full bg-blue-500 hover:bg-blue-600"
                                onClick={() => setStep(2)}
                            >
                                Gửi mã OTP
                            </Button>

                        </div>
                    )}


                    {/* STEP 2 */}
                    {step === 2 && (
                        <div className="space-y-6">

                            <div className="text-center text-sm text-gray-500">

                                Mã OTP đã được gửi đến

                                <p className="mt-1 font-medium text-gray-900">
                                    {email || "email của bạn"}
                                </p>

                            </div>


                            {/* OTP */}
                            <div className="space-y-2">

                                <Label>
                                    Mã OTP 6 số
                                </Label>

                                <div className="flex justify-between gap-2">

                                    {otp.map((value, index) => (
                                        <Input
                                            key={index}
                                            id={`otp-${index}`}
                                            value={value}
                                            maxLength={1}
                                            inputMode="numeric"
                                            className="h-12 w-12 text-center text-lg font-semibold border-gray-300 focus-visible:border-blue-500 focus-visible:ring-blue-100"
                                            onChange={(e) =>
                                                handleOtpChange(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                        />
                                    ))}

                                </div>

                            </div>


                            <Button
                                type="button"
                                className="w-full bg-blue-500 hover:bg-blue-600"
                                onClick={() => setStep(3)}
                            >
                                Xác nhận OTP
                            </Button>


                            <div className="text-center text-sm">

                                <span className="text-gray-500">
                                    Chưa nhận được mã?
                                </span>

                                <button
                                    type="button"
                                    className="ml-1 font-medium text-blue-500 hover:text-blue-600"
                                >
                                    Gửi lại
                                </button>

                            </div>

                        </div>
                    )}


                    {/* STEP 3 */}
                    {step === 3 && (
                        <div className="space-y-5">

                            {/* Password */}
                            <div className="space-y-2">

                                <Label htmlFor="password">
                                    Mật khẩu mới
                                </Label>

                                <div className="relative">

                                    <Input
                                        id="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Nhập mật khẩu mới"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="border-gray-300 pr-12 focus-visible:border-blue-500 focus-visible:ring-blue-100"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? "Ẩn" : "Hiện"}
                                    </button>

                                </div>

                            </div>


                            {/* Confirm password */}
                            <div className="space-y-2">

                                <Label htmlFor="confirm-password">
                                    Xác nhận mật khẩu
                                </Label>

                                <div className="relative">

                                    <Input
                                        id="confirm-password"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Nhập lại mật khẩu"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(
                                                e.target.value
                                            )
                                        }
                                        className="border-gray-300 pr-12 focus-visible:border-blue-500 focus-visible:ring-blue-100"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
                                    >
                                        {showConfirmPassword
                                            ? "Ẩn"
                                            : "Hiện"}
                                    </button>

                                </div>

                            </div>


                            {/* Password requirements */}
                            <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-500">

                                <p className="mb-1 font-medium text-gray-700">
                                    Mật khẩu nên có:
                                </p>

                                <p>✓ Ít nhất 8 ký tự</p>
                                <p>✓ Có chữ hoa</p>
                                <p>✓ Có chữ thường</p>
                                <p>✓ Có ít nhất một chữ số</p>

                            </div>


                            <Button
                                type="button"
                                className="w-full bg-blue-500 hover:bg-blue-600"
                                onClick={() => {}}
                            >
                                Đổi mật khẩu
                            </Button>

                        </div>
                    )}


                    {/* Back */}
                    <div className="mt-6 text-center">

                        {step > 1 ? (
                            <button
                                type="button"
                                onClick={() => setStep(step - 1)}
                                className="text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                ← Quay lại
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                ← Quay lại đăng nhập
                            </button>
                        )}

                    </div>

                </div>

            </div>

        </main>
    );
}