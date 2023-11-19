import type { Meta, StoryObj } from '@storybook/angular';
import { Component, ViewEncapsulation } from '@angular/core';
import { TechIconsModule } from './techIcons.module';
import { TechIconsRegistry } from './techIcons.registry';
import { completeIconSet } from '../icons-dist';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [TechIconsModule, CommonModule],
  template: `
    <div>
      <tech-icon *ngFor="let icon of completeIconSet;" [name]="icon.name"></tech-icon>
    </div>
  `,
  styles: `
    tech-icon svg {
      width: 24px;
      height: 24px;
    }
  `,
  encapsulation: ViewEncapsulation.None
})
class IconsDemoComponent {
  completeIconSet = completeIconSet;
  constructor(private techIconsRegistry: TechIconsRegistry) {
    this.techIconsRegistry.registerIcons(completeIconSet)
  }
}


const meta: Meta<IconsDemoComponent> = {
  title: 'Icons/demo',
  component: IconsDemoComponent,
  tags: ['autodocs'],
  render: (args: IconsDemoComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<IconsDemoComponent>;

export const Primary: Story = {
  args: {}
}