
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Sidebarrr() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown ">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <Link to='/'> 
              Dashboard
                </Link>
            
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="Explore services updates">
            <Sidebar.Item>
               <Link to='all'> 
                  All
                </Link>
            </Sidebar.Item>
            <Sidebar.Item href="#">
            <Link to='buscard'> 
                  Bussiness  card
                </Link>
              
              </Sidebar.Item>
            <Sidebar.Item href="#"><Link to='poster'> 
                  Poster design
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='buslogo'> 
                  bussiness logo
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='calendar'> 
                  calendar design
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='adve'> 
                  advertisement
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='food'> 
                  food supply
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='network'> 
                  network installation
                </Link></Sidebar.Item>
            <Sidebar.Item href="#">
              <Link to='web'> 
              web development
              </Link>
              </Sidebar.Item>
            <Sidebar.Item href="#"><Link to='electrical'> 
                  electrical
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='plumbing'> 
                  Plumbing
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='cctv'> 
                  cctv installation
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='cv'> 
                  Cv making
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='finacial'> 
                  Finacial Bussines
                </Link></Sidebar.Item>
            <Sidebar.Item href="#"><Link to='digital'> 
                  Digital marketing
                </Link>
                </Sidebar.Item>
           
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
