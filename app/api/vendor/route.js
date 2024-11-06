import Vendor from "@/app/Modal/vendor";
import { connectionstr } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
    await connectionstr();

    if (payload.operation === "addvendor") {
        try {
            const { name, vendortype, criticality, status, contact, serviceProvided } = payload;

            const phoneRegex = /^\d{10}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!phoneRegex.test(contact) && !emailRegex.test(contact)) {
                return NextResponse.json({
                    status: 400,
                    message: "Contact must be a valid 10-digit phone number or email address."
                });
            }

            const newVendor = new Vendor({
                name,
                vendortype,
                criticality,
                status,
                contact,
                serviceProvided,
            });

            console.log(newVendor, "newVendor");
            await newVendor.save();

            return NextResponse.json({ status: 200, message: "Vendor added successfully" });

        } catch (error) {
            console.error("Error during vendor registration:", error);
            return NextResponse.json({ status: 500, message: "An error occurred during registration" });
        }
    }
}
