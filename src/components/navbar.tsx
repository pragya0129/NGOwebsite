import React from "react";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link as RouterLink } from "react-router-dom";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  HeartIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = React.useState(i18n.language === "en");
  const { t } = useTranslation();

  const handleChange = () => {
    const newLanguage = isEnglish ? "hi" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar isBordered maxWidth="xl" className="abc">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">NGO</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <RouterLink
                className="linkrouter data-[active=true]:text-primary data-[active=true]:font-medium"
                to={item.href}
              >
                {item.label}
              </RouterLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <Switch
            checked={isEnglish}
            size="md"
            color="primary"
            onChange={handleChange}
          >
            {isEnglish ? (
              <img src="/public/Images/figEngllish.png" alt="" width="40px" />
            ) : (
              <img src="/public/Images/figHindi.png" alt="" width="35px" />
            )}
          </Switch>
          <Button
            onPress={onOpen}
            className="max-w-fit"
            variant="shadow"
            color="danger"
            endContent={<HeartIcon />}
          >
            Support Us
          </Button>
          <Modal
            isOpen={isOpen}
            placement={"center"}
            backdrop="blur"
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          {/* <ThemeSwitch /> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Switch
          checked={isEnglish}
          size="md"
          color="primary"
          onChange={handleChange}
        >
          {isEnglish ? (
            <img src="/public/Images/figEngllish.png" alt="" width="40px" />
          ) : (
            <img src="/public/Images/figHindi.png" alt="" width="35px" />
          )}
        </Switch>
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <RouterLink
                className="data-[active=true]:text-primary data-[active=true]:font-medium"
                to={item.href}
              >
                {item.label}
              </RouterLink>
            </NavbarItem>
          ))}
          <NavbarItem className="sm:flex mt-10">
            <Button
              onPress={onOpen}
              className="max-w-fit"
              variant="shadow"
              color="danger"
            >
              Support Us
            </Button>
            <Modal
              isOpen={isOpen}
              placement={"center"}
              backdrop="blur"
              onOpenChange={onOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Modal Title
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </NavbarItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
