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

import { siteConfig } from "@/config/site";
import { HeartIcon, SearchIcon } from "@/components/icons";
import { Logo } from "@/components/icons";
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
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href}>
              <RouterLink
                className={`linkrouter data-[active=true]:text-primary data-[active=true]:font-medium ${index !== 0 ? "border-left" : ""}`}
                to={item.href}
              >
                {t(`navigation.${item.key}`)}
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
              <img src="assets/Images/figEngllish.png" alt="" width="40px" />
            ) : (
              <img src="assets/Images/figHindi.png" alt="" width="35px" />
            )}
          </Switch>

          <Button
            onPress={onOpen}
            className="max-w-fit"
            variant="shadow"
            color="danger"
            endContent={
              <HeartIcon
                filled={undefined}
                size={undefined}
                height={undefined}
                width={undefined}
                label={undefined}
              />
            }
          >
            {t("support")}
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
                    {t("donateModalTitle")}
                  </ModalHeader>
                  <ModalBody>
                    {/* QR Code Image */}
                    <div className="text-center my-5">
                      <img
                        src="assets/Images/qr.jpeg"
                        alt="QR Code"
                        className="w-36 h-36 mx-auto mb-4"
                      />
                      <p>{t("qrText")}</p>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      {t("close")}
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
            <img src="assets/Images/figEngllish.png" alt="" width="40px" />
          ) : (
            <img src="assets/Images/figHindi.png" alt="" width="35px" />
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
                {t(`navigation.${item.key}`)}
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
              {t("support")}
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
                      {t("donateModalTitle")}
                    </ModalHeader>
                    <ModalBody>
                      {/* QR Code Image */}
                      <div className="text-center my-5">
                        <img
                          src="assets/Images/qr.jpeg"
                          alt="QR Code"
                          className="w-36 h-36 mx-auto mb-4"
                        />
                        <p>{t("qrText")}</p>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        {t("close")}
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
