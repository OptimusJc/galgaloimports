"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Call, LocationOn, Mail } from "relume-icons";

export function Contact6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Get</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">Contact Us</h2>
            <p className="text-medium">
              We're here to help you find the right part.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <Mail className="size-6 flex-none text-scheme-text" />
              <p>hello@relume.io</p>
            </div>
            <div className="flex items-center gap-4">
              <Call className="size-6 flex-none text-scheme-text" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <LocationOn className="size-6 flex-none text-scheme-text" />
              <p>456 Auto Lane, Los Angeles CA 90001 US</p>
            </div>
          </div>
        </div>
        <form className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                First Name
              </Label>
              <Input type="text" id="firstName" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                Last Name
              </Label>
              <Input type="text" id="lastName" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone Number
              </Label>
              <Input type="text" id="phone" />
            </div>
          </div>
          <div className="grid w-full items-center">
            <Label className="mb-2">Select a Topic</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first-choice">First Choice</SelectItem>
                <SelectItem value="second-choice">Second Choice</SelectItem>
                <SelectItem value="third-choice">Third Choice</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">Which best describes you?</Label>
            <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Private Customer" id="#first_choice" />
                <Label htmlFor="#first_choice">Private Customer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#second_choice" />
                <Label htmlFor="#second_choice">Business Owner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#third_choice" />
                <Label htmlFor="#third_choice">Mechanic Shop</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#fourth_choice" />
                <Label htmlFor="#fourth_choice">Distributor Partner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#fifth_choice" />
                <Label htmlFor="#fifth_choice">Other Inquiry</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#other" />
                <Label htmlFor="#other">Other</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
            />
          </div>
          <div className="text-small mb-3 flex items-center space-x-2 md:mb-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the Terms
            </Label>
          </div>
          <div>
            <Button title="Submit">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
