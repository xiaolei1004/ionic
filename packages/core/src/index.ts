import { AnimationController } from './components/animation-controller/animation-controller';
import { Animation, AnimationBuilder } from './components/animation-controller/animation-interface';
import { ActionSheet, ActionSheetButtons, ActionSheetEvent, ActionSheetOptions } from './components/action-sheet/action-sheet';
import { ActionSheetController } from './components/action-sheet-controller/action-sheet-controller';
import { Loading, LoadingEvent, LoadingOptions } from './components/loading/loading';
import { LoadingController } from './components/loading-controller/loading-controller';
import { GestureDetail, GestureCallback } from './components/gesture/gesture';
import { Menu } from './components/menu/menu';
import { MenuType } from './components/menu/menu-types';
import { MenuController } from './components/menu/menu-controller';
import { Modal, ModalOptions, ModalEvent } from './components/modal/modal';
import { ModalController } from './components/modal-controller/modal-controller';

import { Popover, PopoverEvent, PopoverOptions } from './components/popover/popover'
import { PopoverController } from './components/popover-controller/popover-controller'

import { Scroll, ScrollCallback, ScrollDetail } from './components/scroll/scroll';
import { Segment } from './components/segment/segment';
import { SegmentButton, SegmentButtonEvent } from './components/segment-button/segment-button';
import * as Stencil from '@stencil/core';


export const Ionic: IonicGlobal = (window as any).Ionic;


export interface IonicGlobal extends Stencil.AppGlobal {
  controllers?: {[ctrlName: string]: any};
  controller?: IonicController;
  config: ConfigApi;
  registerController?: (ctrlName: string, ctrl: any) => void;
  mode: string;
}


export interface IonicController {
  <AnimationController>(ctrlName: 'animation'): Promise<Animation>;
  <ActionSheetController>(ctrlName: 'action-sheet', opts: ActionSheetOptions): Promise<ActionSheet>;
  <LoadingController>(ctrlName: 'loading', opts: LoadingOptions): Promise<Loading>;
  <MenuController>(ctrlName: 'menu'): Promise<MenuController>;
  <ModalController>(ctrlName: 'modal', opts: ModalOptions): Promise<Modal>;
  <PopoverController>(ctrlName: 'popover', opts: PopoverOptions): Promise<Popover>;
  (ctrlName: string, opts?: any): Promise<IonicControllerApi>;
}


export interface IonicControllerApi {
  load?: (opts?: any) => Promise<any>;
}


export interface ConfigApi {
  get: (key: string, fallback?: any) => any;
  getBoolean: (key: string, fallback?: boolean) => boolean;
  getNumber: (key: string, fallback?: number) => number;
}


export type CssClassMap = { [className: string]: boolean };


export interface BaseInputComponent {
  disabled: boolean;
  hasFocus: boolean;
  value: string;

  fireFocus: () => void;
  fireBlur: () => void;
}


export interface BooleanInputComponent extends BaseInputComponent {
  checked: boolean;
  toggle: (ev: UIEvent) => void;
}


export {
  ActionSheet,
  ActionSheetButtons,
  ActionSheetEvent,
  ActionSheetOptions,
  ActionSheetController,
  Animation,
  AnimationBuilder,
  AnimationController,
  GestureCallback,
  GestureDetail,
  Loading,
  LoadingOptions,
  LoadingController,
  LoadingEvent,
  Menu,
  MenuController,
  MenuType,
  Modal,
  ModalController,
  ModalOptions,
  ModalEvent,
  Popover,
  PopoverController,
  PopoverEvent,
  PopoverOptions,
  Scroll,
  ScrollCallback,
  ScrollDetail,
  Segment,
  SegmentButton,
  SegmentButtonEvent
}
