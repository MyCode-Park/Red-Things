"use client";
import { UserButton } from "@clerk/nextjs";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const menuForAdmin = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Events",
      path: "/admin/events",
    },
    {
      title: "Bookings",
      path: "/admin/bookings",
    },
    {
      title: "User",
      path: "/admin/users",
    },
    {
      title: "Reports",
      path: "/admin/reports",
    },
  ];

  const menuForUsers = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Bookings",
      path: "/user/bookings",
    },
  ];

  const router = useRouter();
  const pathName = usePathname();
  const [menusToShow, setMenusToShow] = React.useState<any[]>([]);
  const isPrivateRoute = !["sign-in", "sing-up"].includes(pathName);
  const getUserData = async () => {
    try {
      const response = await axios.get("/api/current-user");
      console.log("response", response.data);
      if (response.data.user.isAdmin) {
        setMenusToShow(menuForAdmin);
      } else {
        setMenusToShow(menuForUsers);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isPrivateRoute) {
      getUserData();
    }
  }, []);

  return (
    <div className="bg-gray-200 h-screen lg:px-20 px-5">
      {isPrivateRoute && (
        <div className="bg-white flex justify-between items-center shadow p-3">
          <h1
            className="font-semibold text-2xl cursor-pointer text-red-600"
            onClick={() => router.push("/")}
          >
            Red Things
          </h1>

          <div className="flex gap-5 items-center">
            <Dropdown size="sm">
              <DropdownTrigger>
                <Button variant="flat" color="primary" size="sm">
                  Profile
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {menusToShow.map((menu) => (
                  <DropdownItem
                    key={menu.title}
                    onClick={() => {
                      router.push(menu.path);
                    }}
                  >
                    {menu.title}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
      <div className="py-3">{children}</div>
    </div>
  );
}

export default LayoutProvider;
