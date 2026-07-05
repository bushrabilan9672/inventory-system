import { Bell, Search, User } from "lucide-react";
import { Input } from "../ui/input";
import {
  Avatar,
  AvatarFallback,
} from "../ui/avatar";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      {/* Search */}
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <Input
          placeholder="Search products, sales..."
          className="pl-10"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <button className="relative rounded-full p-2 hover:bg-slate-100">
          <Bell size={22} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>RB</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Bushra
            </p>
            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}