import sys
import pygame

import fonts
import title
import menu

import variables as var

pygame.init()

var.screen = pygame.display.set_mode([1024, 576])
pygame.display.set_caption('Defense')

def init():
    fonts.font_load()

def main():
    if var.Game.scene == 'title':
        title.manage()

    elif var.Game.scene == 'menu':
        menu.manage()

def input_handle():
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()

        elif event.type == pygame.MOUSEBUTTONUP:
            temp = pygame.mouse.get_pos()
            var.Mouse.lx = temp[0]
            var.Mouse.ly = temp[1]

            print(var.Mouse.lx, var.Mouse.ly)

            if var.Game.scene == 'title':
                title.mouse_up()

            elif var.Game.scene == 'menu':
                menu.mouse_up()

init()

while 1:
    main()
    input_handle()
