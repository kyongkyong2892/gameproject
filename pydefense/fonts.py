import pygame

pygame.font.init()

title = None
text_1 = None

def font_load():
    global title
    global text_1

    if 'nanumgothic' in pygame.font.get_fonts():
        title = pygame.font.SysFont('nanumgothic', 60)
        text_1 = pygame.font.SysFont('nanumgothic', 24)

    else:
        title = pygame.font.SysFont(None, 60)
        text_1 = pygame.font.SysFont(None, 24)

