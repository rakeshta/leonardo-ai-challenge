'use client';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react';

export interface PaginatorProps {
  page: number;
  count: number;
  onPageChange: (page: number) => void;
}

export function Paginator({ page, count, onPageChange }: PaginatorProps) {
  return (
    <Pagination.Root
      display='flex'
      justifyContent='center'
      count={count}
      page={page}
      onPageChange={(e) => onPageChange(e.page)}
    >
      <ButtonGroup variant='ghost' size='sm'>
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <HiChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>{page.value}</IconButton>}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <HiChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
}
