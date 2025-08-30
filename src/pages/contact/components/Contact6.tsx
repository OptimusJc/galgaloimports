"use client";
import React, { useState } from "react";
import { FaChevronDown, FaHeadphones, FaUser } from "react-icons/fa";
import { Call, LocationOn, Mail, Sms, Check } from "relume-icons";

// Type definitions
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  [key: string]: any;
}

interface InputProps {
  className?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

interface TextareaProps {
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  [key: string]: any;
}

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  [key: string]: any;
}

interface SelectProps {
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
}

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
  onSelect?: (value: string) => void;
}

interface RadioGroupItemProps {
  value: string;
  id: string;
  selectedValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

// Custom UI Components
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Input: React.FC<InputProps> = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${className}`}
    {...props}
  />
);

const Textarea: React.FC<TextareaProps> = ({ className = "", ...props }) => (
  <textarea
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${className}`}
    {...props}
  />
);

const Label: React.FC<LabelProps> = ({ children, htmlFor, className = "" }) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm font-medium text-gray-700 ${className}`}
  >
    {children}
  </label>
);

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  className = "",
  ...props
}) => (
  <div className="relative">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="sr-only"
      {...props}
    />
    <div
      className={`w-4 h-4 border-2 border-gray-300 rounded cursor-pointer transition-all duration-200 ${
        checked
          ? "bg-blue-600 border-blue-600"
          : "bg-white hover:border-blue-400"
      } ${className}`}
      onClick={() =>
        onChange &&
        onChange({
          target: { checked: !checked },
        } as React.ChangeEvent<HTMLInputElement>)
      }
    >
      {checked && (
        <Check className="w-3 h-3 text-white absolute top-0 left-0" />
      )}
    </div>
  </div>
);

const Select: React.FC<SelectProps> = ({
  children,
  value,
  onValueChange,
  placeholder = "Select...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleSelect = (val: string) => {
    setSelectedValue(val);
    onValueChange && onValueChange(val);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
      >
        <span className={selectedValue ? "text-gray-900" : "text-gray-500"}>
          {selectedValue || placeholder}
        </span>
        <FaChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<SelectItemProps>(child)) {
              return React.cloneElement(child, {
                onSelect: handleSelect,
              });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

const SelectItem: React.FC<SelectItemProps> = ({
  children,
  value,
  onSelect,
}) => (
  <button
    type="button"
    onClick={() => onSelect?.(value)}
    className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
  >
    {children}
  </button>
);

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  value,
  id,
  selectedValue,
  onValueChange,
  children,
}) => (
  <div className="flex items-center space-x-2">
    <div className="relative">
      <input
        type="radio"
        id={id}
        value={value}
        checked={selectedValue === value}
        onChange={() => onValueChange?.(value)}
        className="sr-only"
      />
      <div
        className={`w-4 h-4 border-2 rounded-full cursor-pointer transition-all duration-200 ${
          selectedValue === value
            ? "border-blue-600 bg-blue-600"
            : "border-gray-300 bg-white hover:border-blue-400"
        }`}
        onClick={() => onValueChange?.(value)}
      >
        {selectedValue === value && (
          <div className="w-2 h-2 bg-white rounded-full absolute top-0.5 left-0.5" />
        )}
      </div>
    </div>
    <Label htmlFor={id} className="cursor-pointer">
      {children}
    </Label>
  </div>
);

export default function Contact6() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    customerType: "",
    message: "",
    acceptTerms: false,
  });

  // WhatsApp team selection
  const [selectedWhatsAppTeam, setSelectedWhatsAppTeam] = useState<
    "sales" | "support"
  >("sales");

  // Your WhatsApp business numbers
  const whatsappNumbers = {
    sales: {
      number: "+254768298690",
      label: "Sales Team",
      message:
        "Hi! I found your website and I'm interested in your auto parts. Can you help me with pricing and availability?",
    },
    support: {
      number: "+254768298690",
      label: "Support Team",
      message:
        "Hi! I need technical support with auto parts. Can you assist me?",
    },
  } as const;

  // Function to detect mobile device
  const isMobileDevice = (): boolean => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  // Function to open WhatsApp chat with form data
  const startWhatsAppChat = (
    team: "sales" | "support" = selectedWhatsAppTeam,
  ) => {
    const { number } = whatsappNumbers[team];
    const { firstName, lastName, email, phone, topic, customerType, message } =
      formData;

    // Create formatted message with form data
    const whatsappMessage = `Hi! I'm ${firstName} ${lastName} and I found your website.

${message ? `Message: ${message}` : `I'm interested in your auto parts and would like to get more information.`}

Contact Details:
${email ? `📧 Email: ${email}` : ""}
${phone ? `📞 Phone: ${phone}` : ""}
${topic ? `📋 Topic: ${topic}` : ""}
${customerType ? `👤 Customer Type: ${customerType}` : ""}

Sent from your website contact form.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URLs
    const webWhatsAppUrl = `https://web.whatsapp.com/send?phone=${number}&text=${encodedMessage}`;
    const mobileWhatsAppUrl = `https://wa.me/${number}?text=${encodedMessage}`;

    // Open appropriate URL based on device
    if (isMobileDevice()) {
      window.open(mobileWhatsAppUrl, "_blank");
    } else {
      window.open(webWhatsAppUrl, "_blank");
    }
  };

  // Function for quick WhatsApp without form data
  const quickWhatsAppChat = (team: "sales" | "support") => {
    const { number, message } = whatsappNumbers[team];
    const encodedMessage = encodeURIComponent(message);

    const webUrl = `https://web.whatsapp.com/send?phone=${number}&text=${encodedMessage}`;
    const mobileUrl = `https://wa.me/${number}?text=${encodedMessage}`;

    if (isMobileDevice()) {
      window.open(mobileUrl, "_blank");
    } else {
      window.open(webUrl, "_blank");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    startWhatsAppChat();
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Get</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-bold md:mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              We're here to help you find the right part.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-2 mb-8">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 flex-none text-blue-600" />
              <p>sales@galgaloimports.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Call className="w-6 h-6 flex-none text-blue-600" />
              <p className="flex flex-col gap-2 md:flex-row md:gap-3">
                <span>+254 768 298 690</span>
                <span className="hidden md:inline-block">|</span>
                <span>+971 543 176 629</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <LocationOn className="w-6 h-6 flex-none text-blue-600" />
              <p>456 Auto Lane, Los Angeles CA 90001 US</p>
            </div>
          </div>

          {/* Quick WhatsApp Actions */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
              <Sms className="w-5 h-5" />
              Quick WhatsApp Contact
            </h3>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => quickWhatsAppChat("sales")}
                className="w-full flex items-center justify-between p-3 bg-white border border-green-300 rounded-md hover:bg-green-50 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <FaUser className="w-4 h-4 text-blue-600" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Sales Team</div>
                    <div className="text-sm text-gray-600">
                      {whatsappNumbers.sales.number}
                    </div>
                  </div>
                </div>
                <Sms className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform duration-200" />
              </button>

              <button
                type="button"
                onClick={() => quickWhatsAppChat("support")}
                className="w-full flex items-center justify-between p-3 bg-white border border-green-300 rounded-md hover:bg-green-50 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <FaHeadphones className="w-4 h-4 text-green-600" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">
                      Support Team
                    </div>
                    <div className="text-sm text-gray-600">
                      {whatsappNumbers.support.number}
                    </div>
                  </div>
                </div>
                <Sms className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <div className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="grid w-full items-center">
                <Label htmlFor="firstName" className="mb-2">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="lastName" className="mb-2">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="phone" className="mb-2">
                  Phone Number
                </Label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid w-full items-center">
              <Label className="mb-2">Select a Topic</Label>
              <Select
                value={formData.topic}
                onValueChange={(value: string) =>
                  setFormData((prev) => ({ ...prev, topic: value }))
                }
                placeholder="Select one..."
              >
                <SelectItem value="parts-inquiry">Parts Inquiry</SelectItem>
                <SelectItem value="technical-support">
                  Technical Support
                </SelectItem>
                <SelectItem value="bulk-order">Bulk Order</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </Select>
            </div>

            <div className="grid w-full items-center py-3 md:py-4">
              <Label className="mb-3 md:mb-4">Which best describes you?</Label>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                <RadioGroupItem
                  value="Private Customer"
                  id="private"
                  selectedValue={formData.customerType}
                  onValueChange={(value: string) =>
                    setFormData((prev) => ({ ...prev, customerType: value }))
                  }
                >
                  Private Customer
                </RadioGroupItem>

                <RadioGroupItem
                  value="Business Owner"
                  id="business"
                  selectedValue={formData.customerType}
                  onValueChange={(value: string) =>
                    setFormData((prev) => ({ ...prev, customerType: value }))
                  }
                >
                  Business Owner
                </RadioGroupItem>

                <RadioGroupItem
                  value="Mechanic Shop"
                  id="mechanic"
                  selectedValue={formData.customerType}
                  onValueChange={(value: string) =>
                    setFormData((prev) => ({ ...prev, customerType: value }))
                  }
                >
                  Mechanic Shop
                </RadioGroupItem>

                <RadioGroupItem
                  value="Distributor Partner"
                  id="distributor"
                  selectedValue={formData.customerType}
                  onValueChange={(value: string) =>
                    setFormData((prev) => ({ ...prev, customerType: value }))
                  }
                >
                  Distributor Partner
                </RadioGroupItem>

                <RadioGroupItem
                  value="Other Inquiry"
                  id="other-inquiry"
                  selectedValue={formData.customerType}
                  onValueChange={(value: string) =>
                    setFormData((prev) => ({ ...prev, customerType: value }))
                  }
                >
                  Other Inquiry
                </RadioGroupItem>

                <RadioGroupItem
                  value="Other"
                  id="other"
                  selectedValue={formData.customerType}
                  onValueChange={(value: string) =>
                    setFormData((prev) => ({ ...prev, customerType: value }))
                  }
                >
                  Other
                </RadioGroupItem>
              </div>
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                className="min-h-[11.25rem] overflow-auto"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            {/* WhatsApp Team Selection */}
            <div className="grid w-full items-center">
              <Label className="mb-2">Send via WhatsApp to:</Label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedWhatsAppTeam("sales")}
                  className={`flex items-center gap-3 p-3 border rounded-md transition-all duration-200 ${
                    selectedWhatsAppTeam === "sales"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 hover:border-blue-400"
                  }`}
                >
                  <FaUser className="w-4 h-4" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Sales</div>
                    <div className="text-xs text-gray-600">Parts & Pricing</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedWhatsAppTeam("support")}
                  className={`flex items-center gap-3 p-3 border rounded-md transition-all duration-200 ${
                    selectedWhatsAppTeam === "support"
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                >
                  <FaHeadphones className="w-4 h-4" />
                  <div className="text-left">
                    <div className="font-medium text-sm">Support</div>
                    <div className="text-xs text-gray-600">Technical Help</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                name="acceptTerms"
              />
              <Label htmlFor="terms" className="cursor-pointer text-sm">
                I accept the Terms
              </Label>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleSubmit}
                className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
              >
                <Sms className="w-4 h-4" />
                Send via WhatsApp ({whatsappNumbers[selectedWhatsAppTeam].label}
                )
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Will open in{" "}
                {isMobileDevice() ? "WhatsApp mobile app" : "WhatsApp Web"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
